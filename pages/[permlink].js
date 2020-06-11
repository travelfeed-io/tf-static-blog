import gql from 'graphql-tag';
import Wrapper from '../components/Layout/Wrapper';
import Body from '../components/Post/Body';
import { config } from '../config';
import graphQLClient from '../helpers/graphQLClient';

const GET_POST = gql`
  query post($permlink: String!) {
    post(permlink: $permlink) {
      title
      body
      author {
        username
      }
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
          <Body
            body={post.body}
            user={post.isPage ? undefined : post.author.username}
          />
        </div>
      </div>
    </Wrapper>
  );
}

export function getStaticPaths() {
  const paths = [];
  if (config.pages) {
    config.pages.forEach(page => {
      paths.push({ params: { permlink: page.permlink } });
    });
  }
  return graphQLClient(GET_POST_PERMLINKS).then(({ posts }) => {
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
    if (!post)
      config.pages.forEach(page => {
        if (page.permlink === permlink) {
          post = { isPage: true, ...page };
        }
      });
    return {
      props: { post },
    };
  });
}
