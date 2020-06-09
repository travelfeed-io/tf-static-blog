import Link from 'next/link';
import { imageProxy } from '../../helpers/imageProxy';

export default function PostCard({ post }) {
  return (
    <div className="col-md-4">
      <div className="card mb-4 shadow-sm">
        <img
          className="card-img-top"
          src={imageProxy(post.thumbnail, 400, 200)}
          alt="Thumbnail"
        />
        <div className="card-body">
          <h3 className="card-title h5">{post.title}</h3>
          <p className="card-text">{post.excerpt}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <Link href="/[permlink]" as={`/${post.permlink}`}>
                <a className="btn btn-sm btn-outline-secondary">View</a>
              </Link>
            </div>
            <small className="text-muted">
              {Math.round(post.readTime)} mins
            </small>
          </div>
        </div>
      </div>
    </div>
  );
}
