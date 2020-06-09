export default function Jumbotron() {
  return (
    <section className="jumbotron text-center">
      <div className="container">
        <h1 className="jumbotron-heading">Travel Blog Title</h1>
        <p className="lead text-muted">
          Welcome to my travel blog! TravelFeed is awesome.
        </p>
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
