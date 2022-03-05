import { gql } from "@apollo/client";

const NEW_POST = () => {
    return (
        gql`
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
                    }
                }
            }
        }
        `
    )
}

export default NEW_POST