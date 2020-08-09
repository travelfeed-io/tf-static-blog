import gql from 'graphql-tag';
import Jumbotron from '../components/Home/Jumbotron';
import PostList from '../components/Home/PostList';
import Wrapper from '../components/Layout/Wrapper';
import graphQLClient from '../helpers/graphQLClient';

const GET_POSTS = gql`
  query posts {
    posts(limit: 1000, countryCodes: ["gh"]) {
      title
      permlink
      excerpt
      readTime
      thumbnail
    }
  }
`;

export default function Home({ posts }) {
  return (
    <Wrapper>
      <Jumbotron />
      <PostList posts={posts} />
    </Wrapper>
  );
}

export function getStaticProps() {
  return graphQLClient(GET_POSTS).then(({ posts }) => {
    return {
      props: { posts },
    };
  });
}
