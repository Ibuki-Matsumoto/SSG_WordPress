import Link from "next/link"

export const Header = () => {
    return (
        <div className="bg-gray-800 py-3 flex justify-between items-center">
            <p className="text-white text-2xl leading-6 w-60 ml-5">NextBlog</p>
            <div>
                <Link href="/">
                    <a className="text-white mr-5">Top</a>
                </Link>
            </div>
        </div>
    )
}