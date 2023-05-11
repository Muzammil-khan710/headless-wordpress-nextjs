// import client from "@/apollo/server"
// import { GET_PAGES_URI } from "@/queries/pages/get-pages"
// import { useRouter } from "next/router"

// type Props = {}

// const Page = (props: Props) => {
//     const router = useRouter()
//   return (
//     <div>You are viewing {router.asPath.replace('/', '')} </div>
//   )
// }

// export default Page

// export async function getStaticProps({params}:any) {

//     console.log(params)

//     const { data } = await client.query({
//         query:GET_PAGE,
//         variables : {
//             uri: params.slug.join('/')
//         }
//     })

//     return {
//         props: {

//         }
//     }
// }

// export async function getStaticPaths() {

//     const { data } = await client.query({
//         query:GET_PAGES_URI
//     })

//     const pathsData: any[] = []

//     data.pages.nodes.map((page: any) => {
//         if(page.uri) {
//             const slugs = page.uri.replace('/index.php', '').split('/').filter((pageSlug:any) => pageSlug)
//             pathsData.push({params: {id: slugs}})
//         }
//     })

//     console.log(pathsData)

//     return {
//         paths: pathsData,
//         fallback:true
//     }
// }