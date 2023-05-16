import client from "@/apollo/server"
import Footer from "@/components/Footer/Footer"
import Header from "@/components/Header/Header"
import LoadMorePosts from "@/components/news/load-more-news"
import { PER_PAGE_FIRST } from "@/lib/pagination"
import { GET_LOAD_MORE_NEWS } from "@/queries/news/get-load-more-news"
import { GET_NEWS } from "@/queries/news/get-news"
import React from "react"


type Props = {
    headerMenu: any
    footerMenu: any
    footerData: any
    posts:any
}

const index = ({footerData, footerMenu, headerMenu, posts}: Props) => {
  return (
    <React.Fragment>
        <Header data={headerMenu}/>
        <LoadMorePosts posts={posts}/>
        <Footer data={footerMenu} footerData={footerData}/>
    </React.Fragment>
  )
}

export default index

export async function getStaticProps() {

    const { data } = await client.query({
        query: GET_NEWS,
        variables: {
			first: PER_PAGE_FIRST,
			after: null,
		},
    })

    return {
        props: {
            headerMenu: data.headerMenu.edges,
            footerMenu: data.footerMenu.edges,
            footerData: data.footer,
            posts:data.posts
        }
    }
}