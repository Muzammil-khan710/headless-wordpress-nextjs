import Link from "next/link"

type Props = {
    data: any
}

const Header = ({ data }: Props) => {

    return (
        <header className="flex justify-end bg-blue-500 p-8 gap-5">
            {data.map((item: any, i: number) => {
                return (
                    <Link data-cy="nav-item" href={item.node.path.replace('/index.php', '')} key={i}>
                            {item.node.label}
                    </Link>
                )
            })}
            <button data-cy='btn-click' className="bg-gray-200 rounded-md px-2">test</button>
        </header>
    )
}

export default Header