import { config } from '../../config';

export default function Jumbotron() {
  return (
    <section className="jumbotron text-center">
      <div className="container">
        <h1 className="jumbotron-heading">{config.blogTitle}</h1>
        <p className="lead text-muted">{config.blogSlogan}</p>
        <p>
          <a href="#" className="m-2 btn btn-primary">
            Main call to action
          </a>
          <a href="#" className="m-2 btn btn-secondary">
            Secondary action
          </a>
        </p>
      </div>
    </section>
  );
}
