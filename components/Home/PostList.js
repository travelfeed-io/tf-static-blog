import PostCard from './PostCard';

export default function PostList() {
  return (
    <div className="bg-light">
      <div className="container">
        <div className="row">
          {[0, 1, 2, 3, 4, 5].map(() => (
            <PostCard />
          ))}
        </div>
      </div>
    </div>
  );
}
