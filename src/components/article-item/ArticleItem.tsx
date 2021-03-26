import { ArticleItemProps } from './ArticleItem.interface';
import { IMedia } from '../../common/interfaces/entities';
import './ArticleItem.css';

const FORMAT = 'mediumThreeByTwo210';

function getSrcImage(media: IMedia[]) {
  if (!media.length) return null;

  const mediaFound = media.find(
    (x) => x.type === 'image' && x.subtype === 'photo',
  );
  const requiredFormat = mediaFound?.['media-metadata'].find(
    (x) => x.format === FORMAT,
  );
  if (requiredFormat) return requiredFormat;
}

export default function ArticleItem({ article }: ArticleItemProps) {
  const mediaMetaData = getSrcImage(article.media);

  return (
    <div className="article-item">
      <div className="article-content">
        <h2>{article.title}</h2>
        <p>{article.abstract}</p>
      </div>
      <div className="article-image">
        {mediaMetaData && <img src={mediaMetaData.url} alt="new" />}
      </div>
    </div>
  );
}
