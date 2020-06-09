import gql from 'graphql-tag';
import Wrapper from '../components/Layout/Wrapper';
import graphQLClient from '../helpers/graphQLClient';

const GET_POST = gql`
  query post($permlink: String!) {
    post(permlink: $permlink) {
      title
      body
    }
  }
`;

const GET_POST_PERMLINKS = gql`
  query posts {
    posts(limit: 1000) {
      permlink
    }
  }
`;

export default function Post({ post }) {
  return (
    <Wrapper>
      <div className="bg-light">
        <div className="container h-100 p-5">
          <h1>{post.title}</h1>
          {post.body}
        </div>
      </div>
    </Wrapper>
  );
}

export function getStaticPaths() {
  return graphQLClient(GET_POST_PERMLINKS).then(({ posts }) => {
    const paths = [];
    if (posts && posts.length > 0)
      posts.forEach(({ permlink }) => {
        paths.push({ params: { permlink } });
      });
    return {
      paths,
      fallback: false,
    };
  });
}

export function getStaticProps(props) {
  const { permlink } = props.params;
  return graphQLClient(GET_POST, { permlink }).then(({ post }) => {
    return {
      props: { post },
    };
  });
}
