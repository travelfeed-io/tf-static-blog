import Link from 'next/link';
import { config } from '../../config';

export default function Footer() {
  return (
    <footer className="footer mt-auto py-3 bg-dark">
      <div className="container">
        <span className="text-muted">
          Powered by TravelFeed -{' '}
          <a
            className="text-muted"
            href="https://travelfeed.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Create your own free travel blog!
          </a>{' '}
          {config.pages &&
            config.pages.map(({ showInFooter, permlink, title }) => {
              if (showInFooter)
                return (
                  <>
                    {'| '}
                    <Link href="/[permlink]" as={`/${permlink}`}>
                      <a>{title}</a>
                    </Link>
                  </>
                );
              return <></>;
            })}
        </span>
      </div>
    </footer>
  );
}
