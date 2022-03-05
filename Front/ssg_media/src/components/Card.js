import Link from "next/link"

export const Card = ({ title, excerpt, imgsrc, tags, link }) => {
    return (
        // <div className="w-4/5 m-auto" key={title}>
        //     <h2 className="text-blue-600 text-xl">{title}</h2>
        //     <div
        //         dangerouslySetInnerHTML={{ __html: excerpt }}
        //         className="text-red-900"
        //     >
        //     </div>
        // </div>
        <div className="flex flex-col bg-white border drop-shadow-md rounded-lg overflow-hidden cursor-pointer duration-300 hover:opacity-75">
            <Link href={link}>
                <a className="w-full group h-48 md:h-64 block bg-gray-100 overflow-hidden relative">
                    <img src={imgsrc} loading="lazy" alt="記事サムネイル" className="w-full h-full object-cover object-center absolute inset-0  transition duration-200" />
                </a>
            </Link>
            <div className="flex flex-col flex-1 p-4 sm:p-6">
                <div className="flex flex-row gap-2">
                    {tags.map(tag => {
                        return (
                            <div className="border border-gray-600 px-5 py-1 mb-2 rounded-xl" key={tag}>
                                <p className="text-gray-600 text-center">{tag}</p>
                            </div>
                        )
                    })}
                </div>
                <h2 className="text-gray-800 text-lg font-semibold mb-2">
                    <Link href="#">
                        <a className="hover:text-indigo-500 active:text-indigo-600 transition duration-100">{title}</a>
                    </Link>
                </h2>
                <div
                    dangerouslySetInnerHTML={{ __html: excerpt }}
                    className="text-gray-500 mb-8"
                >
                </div>
            </div>
        </div>
    )
}