import Jumbotron from '../components/Home/Jumbotron';
import PostList from '../components/Home/PostList';
import Wrapper from '../components/Layout/Wrapper';

export default function Home() {
  return (
    <Wrapper>
      <Jumbotron />
      <PostList />
    </Wrapper>
  );
}
