import Link from "next/link"

type Props = {
    data:any
}

const BlogCard = ({data}: Props) => {
  return (
    <section className="flex gap-10 justify-center flex-wrap p-4">
        {data.map((item:any) => (
            <Link className="w-[300px] border-2 border-green-950 p-4 hover:scale-105 transition" href={'#'} key={item.node.title}>{item.node.title}</Link>
        ))}
    </section>
  )
}

export default BlogCard