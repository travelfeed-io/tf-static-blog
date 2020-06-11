import Link from 'next/link';
import { imageProxy } from '../../helpers/imageProxy';

export default function PostCard({ post }) {
  return (
    <>
      <div className="col-md-4">
        <div className="card mb-4 shadow-sm">
          <div className="cardimg-container">
            <Link href="/[permlink]" as={`/${post.permlink}`}>
              <a>
                <img
                  className="cardimg card-img-top"
                  src={imageProxy(post.thumbnail, 400, 200)}
                  alt="Thumbnail"
                />
              </a>
            </Link>
          </div>
          <div className="card-body">
            <Link href="/[permlink]" as={`/${post.permlink}`}>
              <a className="text-dark">
                <h3 className="card-title h5">{post.title}</h3>
              </a>
            </Link>
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
      <style jsx>{`
        .cardimg-container {
          overflow: hidden;
          position: relative;
        }
        .cardimg {
          transition: all 0.5s ease;
        }
        .cardimg:hover {
          transform: scale(1.2);
        }
      `}</style>
    </>
  );
}
