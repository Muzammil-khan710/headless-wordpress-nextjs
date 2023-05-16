import Link from "next/link"
import React from "react"

type Props = {
    data: any
}

const BlogPreview = ({ data }: Props) => {
    return (
        <section className="flex justify-evenly flex-wrap">
            {data.map((item: any, i:number) => (
                <Link href={`/blog/${item.node.slug}`} className="text-center m-4 p-4 border max-w-[400px] cursor-pointer" key={i}>
                    <h3 className="text-2xl">{item.node.title}</h3>
                    <p className="text-base" dangerouslySetInnerHTML={{ __html:item.node.excerpt}}/>
                </Link>
            ))}
        </section>
    )
}

export default BlogPreview