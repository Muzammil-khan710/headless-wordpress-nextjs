import { getAllPosts } from "@/queries/get-posts"

type Props = {}

export async function getStaticProps() {
    const allPosts = await getAllPosts()
    console.log(allPosts)
    return {
        props: {
          allPosts: allPosts
        }
    }
}

const blog = (props: Props) => {
  return (
    <div>This is blog page</div>
  )
}

export default blog