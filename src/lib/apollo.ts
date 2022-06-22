import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4pl2owc1tac01xnfckvdbnf/master',
    cache: new InMemoryCache()
})