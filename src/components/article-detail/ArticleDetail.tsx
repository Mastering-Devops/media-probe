import ArticleImage from '../article-image/ArticleImage';
import { ArticleDetailProps } from './ArticleDetail.interface';

export default function ArticleDetail({ article, onBack }: ArticleDetailProps) {
  return (
    <div>
      <button onClick={onBack}>Volver</button>
      <div>
        <h1>{article.title}</h1>
        <p>{article.abstract}</p>
      </div>
      <div>
        <ArticleImage media={article.media} format="mediumThreeByTwo440" />
      </div>
    </div>
  );
}
