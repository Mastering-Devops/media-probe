import { ArticleItemProps } from './ArticleItem.interface';
import './ArticleItem.css';
import ArticleImage from '../../article-image/ArticleImage';

export default function ArticleItem({ article, onSelect }: ArticleItemProps) {
  return (
    <div className="article-item" onClick={() => onSelect(article)}>
      <div className="article-content">
        <h2>{article.title}</h2>
        <p>{article.abstract}</p>
      </div>
      <div className="article-image">
        <ArticleImage media={article.media} />
      </div>
    </div>
  );
}
