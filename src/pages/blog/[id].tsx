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
        <h1 className='text-4xl text-center my-2'>{data.title}</h1>
        <div className='my-20 px-10 text-lg max-w-[800px] text-center flex mx-auto' dangerouslySetInnerHTML={{__html:data.excerpt}}/>
        <a className='flex border border-black p-4 rounded-lg bg-slate-300 hover:bg-slate-400 transition  mx-auto w-max' href={`${process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL}${data.uri}`}>Link to original blog</a>
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

    const { id } = params

    console.log(id)

    const { data } = await client.query({
        query:GET_POST_D,
        variables: {
            slug: id
        }
    })

    return {
        props: {
            data:data.postBy
        }
    }
}

