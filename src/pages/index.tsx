import Header from '@/components/Header/Header';
import { getAllMenus } from '@/queries/get-menus'
import { Key } from 'react';

export async function getStaticProps() {
  const AllMenus = await getAllMenus();
  return {
    props: {
      headerMenu: AllMenus.headerMenu,
      footerMenu: AllMenus.footerMenu,
    }
  };
}

export function Home({ headerMenu, footerMenu }: any) {
  return (
    <main>
      <Header headerMenu={headerMenu} />
      <div>Hello, Learning wordpress-headless with nextjs</div>
    </main>
  )
}

export default Home

