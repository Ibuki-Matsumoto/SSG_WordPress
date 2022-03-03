import {
    gql
} from "@apollo/client";
// GraphQLを扱うApolloクライアント

import { client } from "../src/apollo-client";
// Apolloクライアントの設定ファイル

import {
    Container,
    Box
} from "@chakra-ui/react";
// Chakra-UI

export default function Home({ posts }) {

    return (
        <Container maxW='container.xl'>
            <Box w='100%' bg='gray.100'>
                {posts.map(post => {
                    return (
                        <Box key={post.title}>
                            <h2>{post.title}</h2>
                            <Box
                                dangerouslySetInnerHTML={{ __html: post.excerpt }}
                            />
                        </Box>
                    )
                })}
            </Box>
        </Container>
    )
}

export async function getStaticProps() {

    const res = await client.query({
        query: gql`
        query MyQuery {
            posts {
                edges {
                    node {
                        excerpt(format: RENDERED)
                        title(format: RENDERED)
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