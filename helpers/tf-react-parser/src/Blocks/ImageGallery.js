import ReactImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import LazyLoad from 'react-lazyload';
import Skeleton from 'react-loading-skeleton';
import ProgressiveImage from 'react-progressive-image';

export default function ImageGallery(props) {
  const { images, isWebp, imageProxy } = props;
  const items = [];
  if (images && images.length > 0) {
    images.forEach(image => {
      items.push({
        original: imageProxy(
          image.url,
          1600,
          undefined,
          undefined,
          isWebp ? 'webp' : undefined,
        ),
        thumbnail: imageProxy(
          image.url,
          200,
          undefined,
          undefined,
          isWebp ? 'webp' : 'match',
        ),
      });
    });
  }

  const placeholder = <Skeleton variant="rect" width="100%" height={550} />;

  if (items.length === 0) return <></>;

  return (
    <div className="fullwidth">
      <LazyLoad offset={700} height={550} once placeholder={placeholder}>
        {items && items.length > 0 ? (
          <ProgressiveImage src={items[0].original} placeholder={placeholder}>
            {(src, loading) => {
              if (loading) {
                return placeholder;
              }
              return <ReactImageGallery items={items} />;
            }}
          </ProgressiveImage>
        ) : (
          placeholder
        )}
      </LazyLoad>
    </div>
  );
}
