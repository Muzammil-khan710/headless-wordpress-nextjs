import Link from "next/link"

type Props = {
    data: any
}

const Header = ({ data }: Props) => {
    
    return (
        <header className="flex justify-end bg-blue-500 p-8 gap-5">
            {data.map((item: any, i: number) => {
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