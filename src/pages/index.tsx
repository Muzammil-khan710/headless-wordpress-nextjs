import client from '@/apollo/server';
import BlogCard from '@/components/BlogCard/BlogCard';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import { GET_MENUS } from '@/queries/old-query';

export async function getStaticProps() {
  const { data } = await client.query({
    query:GET_MENUS, 
  })

  return {
    props: {
      headerMenu: data.headerMenu.edges,
      footerMenu: data.footerMenu.edges,
      posts: data.posts.edges
    },
    revalidate:10
  }
}

export function Home({ headerMenu, footerMenu, posts }: any) {
  console.log(posts)
  return (
    <main className='flex flex-col h-screen justify-between'>
      <Header data={headerMenu} />
      <h1 className='text-4xl text-center'>Hello, Learning wordpress-headless with nextjs</h1>
      <BlogCard data={posts}/>
      <Footer data={footerMenu}/>
    </main>
  )
}

export default Home

