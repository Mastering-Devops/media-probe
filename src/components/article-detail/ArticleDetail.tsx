import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { IArticleSearch } from '../../common/interfaces/entities';
import { IMultimedia } from '../../common/interfaces/entities/multimedia';
import { searchArticles } from '../../services/articlesSearch';
import { Image } from '../shared';
import { ArticleDetailParams } from './ArticleDetail.interface';
import './ArticleDetail.css';

export function getImageUrl(multimedia: IMultimedia[]) {
  if (!multimedia.length) return null;

  const mediaFound = multimedia.find(
    (x) => x.type === 'image' && x.subtype === 'jumbo',
  );

  if (!mediaFound) return null;
  return `https://www.nytimes.com/${mediaFound.url}`;
}

export default function ArticleDetail() {
  const [article, setArticle] = useState<IArticleSearch>();
  const {
    year,
    month,
    day,
    section,
    subsection,
    reference,
  } = useParams<ArticleDetailParams>();
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    async function search() {
      try {
        const result = await searchArticles(
          year,
          month,
          day,
          section,
          subsection,
          reference,
        );
        setArticle(result[0]);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    }
    search();
  }, [year, month, day, section, subsection, reference]);

  if (loading) return <>Loading...</>;
  if (!article) return <>Ocurrió un error al cargar los datos</>;

  return (
    <div className="article-detail">
      <button onClick={() => history.push('/')}>Volver</button>
      <div>
        <h1 className="article-headline-main">{article.headline.main}</h1>
        <p className="article-abstract">{article.abstract}</p>
      </div>
      <div className="image-container">
        <Image url={getImageUrl(article.multimedia)} />
      </div>
      <div>
        <p className="byline">{article.byline.original}</p>
        <p className="pub-date">{new Date(article.pub_date).toDateString()}</p>
        <p className="article-lead-paragrah">{article.lead_paragraph}</p>
      </div>
    </div>
  );
}
