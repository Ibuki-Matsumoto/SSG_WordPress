import Link from "next/link"

export const Header = () => {
    return (
        <div className="bg-white py-4">
            <Link href="/" passHref>
                <a className="text-gray-800 text-3xl pl-5 tracking-wide">NextBlog</a>
            </Link>
        </div>
    )
}