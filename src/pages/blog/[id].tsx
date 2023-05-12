import client from '@/apollo/server'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import SingleBlog from '@/components/SingleBlog/SingleBlog'
import { GET_ALL_POSTS } from '@/queries/get-allposts'
import { GET_POST_D } from '@/queries/get-post-d'
import { GET_POST_WITH_PAGE } from '@/queries/get-post-with-page'
import React from 'react'


type Props = {
    post: any
    headerMenu: any
    footerMenu: any
    footerData:any
}

const DynamicBlog = ({ post, headerMenu, footerMenu, footerData }: Props) => {
    console.log(footerData)
    return (
        <>
            <Header data={headerMenu} />
            <SingleBlog data={post} />
            <Footer  data={footerMenu} footerData={footerData}/>
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
        fallback: false
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
            post: data.postBy,
            headerMenu: data.headerMenu.edges,
            footerMenu: data.footerMenu.edges,
            footerData: data.footer
        }
    }
}

