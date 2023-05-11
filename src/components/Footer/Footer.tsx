import Link from "next/link"

type Props = {
    data: any
}

const Footer = ({ data }: Props) => {
    return (
        <footer className="flex justify-start  bg-blue-400 p-8 gap-5">
            {data.map((item: any, i: number) => {
                return (
                    <Link href={item.node.path.replace('/index.php', '')} key={i}>
                        {item.node.label}
                    </Link>
                )
            })}
        </footer>
    )
}

export default Footer