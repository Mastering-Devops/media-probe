import { ArticleItemProps, ArticleImageFormat } from './ArticleItem.interface';
import { IMedia } from '../../../common/interfaces/entities';
import { Image } from '../../shared';
import './ArticleItem.css';

function getImageUrl(media: IMedia[], format: ArticleImageFormat) {
  if (!media.length) return null;

  const mediaFound = media.find(
    (x) => x.type === 'image' && x.subtype === 'photo',
  );
  const requiredFormat = mediaFound?.['media-metadata'].find(
    (x) => x.format === format,
  );
  if (!requiredFormat) return null;
  return requiredFormat.url;
}

export default function ArticleItem({ article, onSelect }: ArticleItemProps) {
  return (
    <div
      data-testid="article-item"
      className="article-item"
      onClick={() => onSelect(article)}
    >
      <div className="article-content">
        <h2>{article.title}</h2>
        <p>{article.abstract}</p>
        <p>{article.byline}</p>
      </div>
      <div
        data-testid="article-image"
        className="image-container article-image"
      >
        <Image url={getImageUrl(article.media, 'mediumThreeByTwo210')} />
      </div>
    </div>
  );
}
