import Link from "next/link"

type Props = {
    data: any
    footerData: any
}

const Footer = ({ data, footerData }: Props) => {
    return (
        <footer className="flex flex-col justify-start  bg-blue-400 p-8 gap-5">
            <div className="flex gap-10 justify-center">
                {data.map((item: any, i: number) => {
                    return (
                        <Link href={item.node.path.replace('/index.php', '')} key={item.node.path}>
                            {item.node.label}
                        </Link>
                    )
                })}
            </div>
            <p className="text-center" >{footerData.copyrightText} &#169;</p>
            <div className="flex justify-center gap-10">
                {footerData.socialLinks.map((item: any) => (
                    <Link href={item.iconUrl} key={item.iconName}>
                        {item.iconName}
                    </Link>
                ))}
            </div>
        </footer>
    )
}

export default Footer