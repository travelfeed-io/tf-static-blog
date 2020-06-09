import Link from 'next/link';
import { imageProxy } from '../../helpers/imageProxy';
import parseTfToReact from '../../helpers/tf-react-parser/src';

export default function Body({ body, user }) {
  const reactParsed = parseTfToReact(body, {
    imageProxy,
    Link,
    user,
  });
  const { bodyText } = reactParsed;

  return <>{bodyText}</>;
}
