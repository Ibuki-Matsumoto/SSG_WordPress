import {
    gql
} from "@apollo/client";
import { client } from "../src/apollo-client";
import { Header } from "../src/components/Header";
import { GrUpdate } from "react-icons/gr";
import Image from 'next/image'

export default function Post({ post }) {
    console.log(post)
    return (
        <div className="bg-gray-100">
            <Header />
            {[...post].map(ps => {
                return (
                    <div className="tracking-wide w-7/12 mt-10 ml-60">
                        <div className="bg-white px-10">
                            <h1 className="text-3xl font-bold mb-5 pt-10">{ps.title}</h1>
                            <p className="flex items-center">
                                <span className="pr-2"><GrUpdate color={'#ccc'} /></span>
                                <span>{ps.modified.substr(0, 10)}</span>
                            </p>
                            <div className="thumbnail w-full">
                                <Image
                                    src={ps.featuredImage.node.sourceUrl}
                                    width="100%"
                                    layout="responsive"
                                    objectFit="contain"
                                    height="55%"
                                />
                            </div>
                            <div
                                className="inner_contents"
                                dangerouslySetInnerHTML={{
                                    __html: `${ps.content}`,
                                }}
                            />
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export async function getStaticPaths() {
    const res = await client.query({
        query: gql`
        query MyQuery {
            posts(first: 3) {
                edges {
                    node {
                        title(format: RENDERED)
                        excerpt(format: RENDERED)
                        featuredImage {
                            node {
                                sourceUrl
                            }
                        }
                        postId
                    }
                }
            }
        }
        `
    });

    const paths = res.data.posts.edges.map(({ node }) => {
        return {
            params: { id: String(node.postId) }
        }
    });

    return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
    const res = await client.query({
        query: gql`
        query MyQuery2 {
            posts(where: {id: ${Number(params.id)}}) {
                edges {
                    node {
                        title(format: RENDERED)
                        content(format: RENDERED)
                        modified
                        featuredImage {
                            node {
                                sourceUrl
                            }
                        }
                    }
                }
            }
        }
        `
    });

    const post = res.data.posts.edges.map(({ node }) => node);

    return {
        props: {
            post
        }
    }
}