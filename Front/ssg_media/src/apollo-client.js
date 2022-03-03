import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://wp.n4rublog.dev/graphql',
    cache: new InMemoryCache()
});