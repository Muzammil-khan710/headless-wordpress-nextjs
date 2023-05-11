import { useRouter } from "next/router"
import client from "@/apollo/server"
import { GET_POST } from "@/queries/get-post"
import SingleBlog from "@/components/SingleBlog/SingleBlog"

type Props = {
    data:any
}

const Blog = ({data}: Props) => {
    const router = useRouter()
    console.log(data)
  return (
    <div>
        <h1>Hey this is a blog page and page is {router.asPath} </h1>
        <SingleBlog data={data}/>
    </div>
  )
}

export default Blog


export async function getStaticProps() {

    const { data } = await client.query({
        query:GET_POST
    })

    console.log(data)

    return {
        props: {
            data:data.posts.nodes
        }
    }
}