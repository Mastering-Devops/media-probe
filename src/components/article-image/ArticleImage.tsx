// import { useMemo } from 'react';
import { IMedia } from '../../common/interfaces/entities';
import {
  ArticleImageFormat,
  ArticleImageProps,
} from './ArticleImage.interface';

function getSrcImage(media: IMedia[], format: ArticleImageFormat) {
  if (!media.length) return null;

  const mediaFound = media.find(
    (x) => x.type === 'image' && x.subtype === 'photo',
  );
  const requiredFormat = mediaFound?.['media-metadata'].find(
    (x) => x.format === format,
  );
  if (requiredFormat) return requiredFormat;
}

export default function ArticleImage({
  media,
  type = 'list',
  format = 'mediumThreeByTwo210',
}: ArticleImageProps) {
  const mediaMetaData = getSrcImage(media, format);

  // const mediaMetaDataWithMemo = useMemo(() => getSrcImage(media, ), [media]);

  if (!mediaMetaData) return null;

  return <img src={mediaMetaData.url} alt="new" />;
}
