import {
    gql
} from "@apollo/client";
import { client } from "../src/apollo-client";

export default function Post({ post }) {
    console.log(post)
    return (
        <div>
            {post.map(ps => {
                return (
                    <h1>{ps.title}</h1>
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