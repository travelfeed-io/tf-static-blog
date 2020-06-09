import PostCard from './PostCard';

export default function PostList({ posts }) {
  return (
    <div className="bg-light">
      <div className="container">
        <div className="row">
          {posts.map(post => (
            <PostCard post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
