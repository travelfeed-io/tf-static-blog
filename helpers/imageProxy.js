// This is an example image proxy configuration that uses Hive blog images. Please make sure that you have their permission if you plan to use this on your website or configure your own image proxy or replace this with your own configuration. TravelFeed currently does not offer an image proxy. Services with free tiers include https://imagekit.io/

const bs58 = require('bs58');

const imageProxy = (imgUrl, width, height, mode, format) => {
  if (!imgUrl) {
    return undefined;
  }
  try {
    // Base58 encode image url
    const bytes = Buffer.from(imgUrl);
    const address = bs58.encode(bytes);
    // Get the cropped URL for an image
    return `https://images.hive.blog/p/${address}/?format=${format || 'match'}${
      width ? `&width=${width}` : ''
    }${height ? `&height=${height}` : ''}${mode ? `&mode=${mode}` : ''}`;
  } catch (err) {
    console.warn(err);
    return undefined;
  }
};

module.exports = { imageProxy };
