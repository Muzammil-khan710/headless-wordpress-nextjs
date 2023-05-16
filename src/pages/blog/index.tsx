import client from '../../apollo/server'
import Header from "@/components/Header/Header"
import Footer from "@/components/Footer/Footer"
import { GET_BLOG_PAGE } from "@/queries/pages/get-blog-page"
import BlogPreview from '@/components/Blog/BlogPreview'
import { PER_PAGE_FIRST, totalPagesCount } from '@/lib/pagination'
import Pagination from '@/components/Blog/pagination'

type Props = {
  headerMenu:any
  footerMenu:any
  footerData:any
  blogs:any
  pagesCount:any
}

export async function getStaticProps() {
    const { data } = await client.query({
      query:GET_BLOG_PAGE, 
      variables: {
        perPage: PER_PAGE_FIRST,
			  offset: null,
      }
    })

    return {
      props: {
        headerMenu: data.headerMenu.edges,
        footerMenu: data.footerMenu.edges,
        footerData: data.footer, 
        blogs: data.posts.edges,
        pagesCount: data.posts.pageInfo.offsetPagination.total
      }
    }
}

const blog = ({headerMenu, footerMenu, footerData, blogs, pagesCount}: Props) => {
  // const totalPages = totalPagesCount(pagesCount ?? 0) 
  
  return (
    <section>
      <Header data={headerMenu}/>
      <BlogPreview data={blogs} />
      <Pagination pagesCount={pagesCount} postName={'blog'}/>
      <Footer data={footerMenu} footerData={footerData}/>
    </section>
  )
}

export default blog