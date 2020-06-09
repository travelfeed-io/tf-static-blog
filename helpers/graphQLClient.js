import { GraphQLClient } from 'graphql-request';
import { print } from 'graphql/language/printer';

const graphQLClient = new GraphQLClient('https://api.travelfeed.io/graphql', {
  credentials: 'same-origin',
  headers: {
    Authorization: process.env.TF_API_KEY,
  },
});

const request = (query, variables) => {
  return graphQLClient.request(print(query), variables);
};

export default request;
