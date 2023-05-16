import client from '@/apollo/server'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import SingleBlog from '@/components/SingleBlog/SingleBlog'
import { GET_ALL_POSTS } from '@/queries/get-allposts'
import { GET_POST_WITH_PAGE } from '@/queries/get-post-with-page'
import { NextSeo } from 'next-seo'
import React from 'react'

type Props = {
    post: any
    headerMenu: any
    footerMenu: any
    footerData:any
    seoData:any
}

const DynamicBlog = ({ post, headerMenu, footerMenu, footerData, seoData }: Props) => {
    return (
        <>
            <NextSeo
                title={seoData.title}
                description={seoData.metaDesc}
                openGraph={{
                    url: seoData.openGraphUrl, 
                    type: seoData.openGraphType,
                    siteName: seoData.openGraphSiteName, 
                }}
            />
            <Header data={headerMenu} />
            <SingleBlog data={post} />
            <Footer  data={footerMenu} footerData={footerData}/>
            <script type='application/ld+json' dangerouslySetInnerHTML={{__html: seoData.schema.raw}}/>
        </>
    )
}

export default DynamicBlog

export async function getStaticPaths() {
    const { data } = await client.query({
        query: GET_ALL_POSTS
    })

    const paths = data.posts.nodes.map(({ slug }: any) => ({ params: { id: slug } }))

    return {
        paths,
        fallback: 'blocking'
    }
}

export async function getStaticProps({ params }: any) {

    const { id } = params

    const { data } = await client.query({
        query: GET_POST_WITH_PAGE,
        variables: {
            slug: id
        }
    })

    return {
        props: {
            post: data.post,
            headerMenu: data.headerMenu.edges,
            footerMenu: data.footerMenu.edges,
            footerData: data.footer,
            seoData: data.post.seo
        },
        revalidate:10
    }
}

