import { useRouter } from "next/router"

type Props = {}

const Blog = (props: Props) => {
    const router = useRouter()
  return (
    <div>
        <h1>Hey this is a blog page and page is {router.asPath} </h1>
    </div>
  )
}

export default Blog