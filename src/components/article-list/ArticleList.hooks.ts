import { useEffect, useState } from 'react';
import { IViewedArticle } from '../../common/interfaces/entities';
import { Period } from '../../common/types';
import { getArticles } from '../../services/articles';

export function useViewedArticles(
  selectedTab: Period,
): [boolean, IViewedArticle[]] {
  const [articles, setArticles] = useState<IViewedArticle[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getArticles(selectedTab)
      .then((result) => {
        const orderedArticles = [...result];
        orderedArticles.sort(
          (a, b) =>
            new Date(b['published_date']).getTime() -
            new Date(a['published_date']).getTime(),
        );
        setArticles(orderedArticles);
        setLoading(false);
      })
      .catch((error) => {
        alert(JSON.stringify(error.message));
        setLoading(false);
      });

    return () => setArticles([]);
  }, [selectedTab]);

  return [loading, articles];
}
