import client from '@/apollo/server';
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
    }
  }
}

export function Home({ headerMenu, footerMenu }: any) {
  return (
    <main className='flex flex-col h-screen justify-between'>
      <Header data={headerMenu} />
      <div>Hello, Learning wordpress-headless with nextjs</div>
      <Footer data={footerMenu}/>
    </main>
  )
}

export default Home

