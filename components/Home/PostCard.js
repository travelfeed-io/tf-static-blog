export default function PostCard() {
  return (
    <div className="col-md-4">
      <div className="card mb-4 shadow-sm">
        <img
          className="card-img-top"
          src="https://via.placeholder.com/300x150"
          alt="Thumbnail"
        />
        <div className="card-body">
          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
              >
                View
              </button>
            </div>
            <small className="text-muted">9 mins</small>
          </div>
        </div>
      </div>
    </div>
  );
}
