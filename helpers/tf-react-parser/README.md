# tf-react-parser

Parse TravelFeed Posts as React Components

# Usage

```
 const reactParsed = parseTfToReact(body, {
    imageProxy,
    Link,
    user,
  });
  const { bodyText } = reactParsed;
```

# Configuration

You need to pass a configuration

| Parameter         | Type      | Default    | Description                           |
| ----------------- | --------- | ---------- | ------------------------------------- |
| imageProxy        | function  | (required) | Function to proxy image url           |
| Link              | component | (requied)  | e.g. next/link in next.js             |
| user              | string    | undefined  | post author                           |
| replaceExitUrls   | boolean   | false      | replace external links with /exit?url |
| parseLinksToBlank | boolean   | false      | open links in new window              |
| windowHeight      | integer   | undefined  | placeholder height                    |
| lazy              | boolean   | true       | Use lazy load for images              |
| hideimgcaptions   | boolean   | false      | Don't render alt texts as captions    |
| amp               | boolean   | false      | Return AMP-ready components           |
| webpSupport       | boolean   | false      | Return webp images                    |
