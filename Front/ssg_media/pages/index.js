import {
    gql
} from "@apollo/client";
// GraphQLを扱うApolloクライアント

import { client } from "../src/apollo-client";
// Apolloクライアントの設定ファイル

import { Card } from "../src/components/Card";
import { Header } from "../src/components/Header";

export default function Home({ posts }) {

    console.log(posts)

    return (
        <div className="w-full">
            <Header />
            <div className="max-w-screen-2xl mt-10 px-4 md:px-8 mx-auto">
                <div className="mb-10 md:mb-16">
                    <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">最新記事</h2>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3  gap-4 md:gap-6 lg:gap-8">
                    {posts.map(post => {
                        return (
                            <Card
                                title={post.title}
                                excerpt={post.excerpt}
                                imgsrc={post.featuredImage.node.sourceUrl}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export async function getStaticProps() {

    const res = await client.query({
        query: gql`
        query MyQuery {
            posts {
                edges {
                    node {
                        title(format: RENDERED)
                        excerpt(format: RENDERED)
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

    const posts = res.data.posts.edges.map(({ node }) => node);

    return {
        props: {
            posts
        }
    }
}