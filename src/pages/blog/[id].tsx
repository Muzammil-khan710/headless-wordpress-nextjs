import client from '@/apollo/server'
import { GET_ALL_POSTS } from '@/queries/get-allposts'
import { GET_POST_D } from '@/queries/get-post-d'
import React from 'react'


type Props = {
    data:any
}

const DynamicBlog = ({data}: Props) => {
  return (
    <>
        <h1 className='text-4xl text-center'>{data.title}</h1>
        <div dangerouslySetInnerHTML={{__html:data.excerpt}}/>
        <a href={`${process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL}${data.uri}`}>Link to original blog</a>
    </>
  )
}

export default DynamicBlog

export async function getStaticPaths() {
    const { data } = await client.query({
        query:GET_ALL_POSTS
    })

    const paths = data.posts.nodes.map(({slug}:any) => ({params: {id:slug}}))

    return {
        paths,
        fallback:false
    }
}

export async function getStaticProps({params}:any) {

    const { data } = await client.query({
        query:GET_POST_D,
        variables: params.id
    })

    return {
        props: {
            data:data.postBy
        }
    }
}

