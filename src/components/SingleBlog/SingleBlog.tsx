import Link from "next/link"
import React from "react"

type Props = {
    data:any
}

const SingleBlog = ({data}: Props) => {
  return (
    <section>
        <h1 className='text-4xl text-center my-2'>{data.title}</h1>
        <div className='my-20 px-10 text-lg max-w-[800px] text-center flex mx-auto' dangerouslySetInnerHTML={{__html:data.excerpt}}/>
        <a className='flex border border-black p-4 rounded-lg bg-slate-300 hover:bg-slate-400 transition  mx-auto w-max' href={`${process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL}${data.uri}`}>Link to original blog</a>
        <Link className='underline text-center flex mx-auto w-max my-7' href={'/'}>Back to home</Link>
    </section>
  )
}

export default SingleBlog