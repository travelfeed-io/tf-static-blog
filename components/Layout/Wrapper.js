import NextHead from 'next/head';
import Footer from './Footer';
import Header from './Header';

export default function Jumbotron({ children }) {
  return (
    <>
      <NextHead>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </NextHead>
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
