import Footer from './Footer';
import Header from './Header';

export default function Jumbotron({ children }) {
  return (
    <>
      <div className="d-flex flex-column" style={{ minHeight: '100vh' }}>
        <Header />
        <main
          role="main"
          className="bg-light flex-shrink-0"
          style={{ minHeight: 'calc(100vh - 115px)' }}
        >
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}
