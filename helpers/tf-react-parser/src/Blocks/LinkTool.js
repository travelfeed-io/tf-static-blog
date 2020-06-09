export default function LinkTool(props) {
  const {
    title,
    description,
    image,
    author,
    permlink,
    Link,
    user,
    imageProxy,
  } = props;

  return (
    <>
      <div className="card">
        <div className="card-content">
          <div className="container">
            <div className="row">
              {image && (
                <div className="img-container">
                  {user === author ? (
                    <Link as={`/${permlink}`} href="/[permlink]">
                      <a>
                        <div className="img-bg" />
                      </a>
                    </Link>
                  ) : (
                    <a href={`https://travelfeed.io/@${author}/${permlink}`}>
                      <div className="img-bg" />
                    </a>
                  )}
                </div>
              )}
              <div
                className={`col-12 ${
                  image ? 'col-xl-8 col-lg-8 cl-md-8 col-sm-8' : ''
                }`}
              >
                {user === author ? (
                  <Link as={`/${permlink}`} href="/[permlink]">
                    <a>
                      <h5 className="title">{title}</h5>
                    </a>
                  </Link>
                ) : (
                  <h6>
                    <a href={`https://travelfeed.io/@${author}/${permlink}`}>
                      {title}
                    </a>
                    <em>
                      {' '}
                      by{' '}
                      <a href={`https://travelfeed.io/@${author}`}>{author}</a>
                    </em>
                  </h6>
                )}
                <p>{description}</p>
                {user === author ? (
                  <Link as={`/${permlink}`} href="/[permlink]">
                    <a>
                      <div className="rm-button">Read More</div>
                    </a>
                  </Link>
                ) : (
                  <a href={`https://travelfeed.io/@${author}/${permlink}`}>
                    <div className="button">Read More</div>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .title {
          padding-top: 15px;
          font-size: 20px;
        }
        .rm-button {
          margin-bottom: 15px;
          display: inline-block;
          font-weight: 400;
          text-align: center;
          vertical-align: middle;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
          border: 1px solid transparent;
          padding: 0.375rem 0.75rem;
          font-size: 1rem;
          line-height: 1.5;
          border-radius: 0.25rem;
          transition: color 0.15s ease-in-out,
            background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
            box-shadow 0.15s ease-in-out;
          color: #fff;
          background-color: #049688;
          border-color: #00695d;
        }
        .rm-button:hover {
          background-color: #c1dbd9;
          color: #212529;
        }
        .img-container {
          width: 30%;
          overflow: hidden;
          position: relative;
        }
        @media (max-width: 992px) {
          .img-container {
            width: 100%;
            height: 200px;
          }
        }
        .img-bg {
          height: 100%;
          background-image: ${image
            ? `linear-gradient(rgba(0, 0, 0, 0.1),rgba(0, 0, 0,0.5)),
    url("${imageProxy(image, undefined, 400, 'fit')}")`
            : undefined};
          background-repeat: no-repeat;
          background-position: center center;
          background-size: cover;
          minheight: 150px;
          transition: all 0.5s;
        }
        .img-bg:hover {
          transform: scale(1.3);
        }
        .card {
          position: relative;
          display: -ms-flexbox;
          display: flex;
          -ms-flex-direction: column;
          flex-direction: column;
          min-width: 0;
          word-wrap: break-word;
          background-color: #fff;
          background-clip: border-box;
          border: 1px solid rgba(0, 0, 0, 0.125);
          border-radius: 0.25rem;
        }
      `}</style>
    </>
  );
}
