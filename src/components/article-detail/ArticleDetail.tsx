import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { IArticleSearch } from '../../common/interfaces/entities';
import { IMultimedia } from '../../common/interfaces/entities/multimedia';
import { ArticleApi } from '../../services/articles';
import { Image } from '../shared';
import { ArticleDetailParams } from './ArticleDetail.interface';
import './ArticleDetail.css';

function getImageUrl(multimedia: IMultimedia[]) {
  if (!multimedia.length) return null;

  const mediaFound = multimedia.find(
    (x) => x.type === 'image' && x.subtype === 'jumbo',
  );

  if (!mediaFound) return null;
  return `https://www.nytimes.com/${mediaFound.url}`;
}

export default function ArticleDetail() {
  const [article2, setArticle] = useState<IArticleSearch>();
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
    ArticleApi.searchArticles(year, month, day, section, subsection, reference)
      .then((result) => {
        setArticle(result.data.response.docs[0]);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [year, month, day, section, subsection, reference]);

  if (loading) return <>Loading...</>;
  if (!article2) return <>Ocurrió un error al cargar los datos</>;

  return (
    <div className="article-detail">
      <button onClick={() => history.push('/')}>Volver</button>
      <div>
        <h1 className="article-headline-main">{article2.headline.main}</h1>
        <p className="article-abstract">{article2.abstract}</p>
      </div>
      <div className="image-container">
        <Image url={getImageUrl(article2.multimedia)} />
      </div>
      <div>
        <p className="byline">{article2.byline.original}</p>
        <p className="pub-date">{new Date(article2.pub_date).toDateString()}</p>
        <p className="article-lead-paragrah">{article2.lead_paragraph}</p>
      </div>
    </div>
  );
}
