import Link from "next/link"

type Props = {
    headerMenu: any
}

const Header = ({ headerMenu }: Props) => {
    
    return (
        <header  className="flex bg-blue-500 py-8 gap-4">
            {headerMenu.edges.map((item: any, i: number) => {
                return (
                    <Link href={item.node.path.replace('/index.php', '')} key={i}>
                        {item.node.label}
                    </Link>
                )
            })}
        </header>
    )
}

export default Header