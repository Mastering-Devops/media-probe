import { ImageProps } from './Image.interface';

export default function Image({ url, alt = 'new' }: ImageProps) {
  if (!url) return null;

  return <img src={url} alt={alt} />;
}
