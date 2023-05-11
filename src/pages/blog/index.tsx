import { GET_MENUS } from "@/queries/old-query"
import client from '../../apollo/server'
import Header from "@/components/Header/Header"
import Footer from "@/components/Footer/Footer"

type Props = {
  headerMenu:any
  footerMenu:any
}

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

const blog = ({headerMenu, footerMenu}: Props) => {
  return (
    <section>
      <Header data={headerMenu}/>
      <Footer data={footerMenu}/>
    </section>
  )
}

export default blog