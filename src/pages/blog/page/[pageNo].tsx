import { useRouter } from 'next/router';
import { getPageOffset, PER_PAGE_FIRST, PER_PAGE_REST } from '@/lib/pagination';
import Pagination from '@/components/Blog/pagination';
import { GET_BLOG_PAGE, GET_TOTAL_POSTS_COUNT } from '@/queries/pages/get-blog-page';
import client from '@/apollo/server';
import React from 'react';
import BlogPreview from '@/components/Blog/BlogPreview';

const Page = ({ data }: any) => {
    const { posts } = data;
    const router = useRouter();

    const { pageInfo } = posts ?? {};
    const totalPostsCount = pageInfo?.offsetPagination?.total ?? 0;

    const pagesCount = Math.ceil((totalPostsCount - PER_PAGE_FIRST) / PER_PAGE_REST + 1);

    // Redirecting to /blog if we are on page 1
    const pageNo = router?.query?.pageNo ?? 1;

    if ('undefined' !== typeof window && '1' === pageNo) {
        router.push('/blog');
    }

    return (
        <React.Fragment>
            <BlogPreview data={posts?.edges ?? []} />
            <Pagination pagesCount={pagesCount} postName="blog" />
        </React.Fragment>
    );
};

export default Page;

export async function getStaticProps({ params }:any) {
    //Note: pageNo is in string
    const { pageNo } = params || {};
    const offset = getPageOffset(pageNo);
    const variables = {
        page: '/blog/',
        perPage: '1' === pageNo ? PER_PAGE_FIRST : PER_PAGE_REST,
        offset,
    };

    const { data, errors } = await client.query({
        query: GET_BLOG_PAGE,
        variables,
    });
    return {
        props: {
            data: data || {}
        },
        /**
         * Revalidate means that if a new request comes to server, then every 1 sec it will check
         * if the data is changed, if it is changed then it will update the
         * static file inside .next folder with the new data, so that any 'SUBSEQUENT' requests should have updated data.
         */
        revalidate: 1,
    }
}

export async function getStaticPaths() {
    const { data } = await client.query({
        query: GET_TOTAL_POSTS_COUNT,
    });
    const totalPostsCount = data?.postsCount?.pageInfo?.offsetPagination?.total ?? 0;
    //* since the first page posts and other page posts will be different, we subtract the no of posts we'll show on first page and then divide the result with the no of posts we'll show on other pages and then will add 1 for the first page that we subtracted.
    const pagesCount = Math.ceil((totalPostsCount - PER_PAGE_FIRST) / PER_PAGE_REST + 1);
    const paths = new Array(pagesCount).fill('').map((_, index) => ({
        params: {
            pageNo: (index + 1).toString(),
        },
    }));

    return {
        paths: [...paths],
        fallback: false,
    };
}
