import { useEffect, useMemo, useState } from 'react';
import ArticleItem from './article-item/ArticleItem';
import { ArticleApi } from '../../services/articles';
// import { defaultValues } from '../../app/articles';
import { IViewedArticle } from '../../common/interfaces/entities';
import ArticleSearch from '../article-search/ArticleSearch';
import { useHistory } from 'react-router';
import { Period } from '../../common/types';
import Tabs from '../shared/tabs/Tabs';
import { tabs } from './ArticleList.constants';

const filteredValues = (articles: IViewedArticle[], filter: string) => {
  let data = [...articles];
  data = data.filter(
    (x) =>
      x.title.toLowerCase().indexOf(filter.trim()) > -1 ||
      x.byline.toLowerCase().indexOf(filter.trim()) > -1,
  );
  return data;
};

export default function ArticleList() {
  const history = useHistory();
  const [selectedTab, setSelectedTab] = useState<Period>('7');
  const [articles, setArticles] = useState<IViewedArticle[]>([]);
  const [filter, setFilter] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    ArticleApi.getArticles(selectedTab)
      .then(({ data: { results } }) => {
        const orderedArticles = [...results];
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

  // useEffect(() => {
  //   const orderedArticles = [...defaultValues];
  //   orderedArticles.sort(
  //     (a, b) =>
  //       new Date(b['published_date']).getTime() -
  //       new Date(a['published_date']).getTime(),
  //   );
  //   setArticles(orderedArticles);
  // }, []);

  const filteredValuesMemo = useMemo(() => filteredValues(articles, filter), [
    articles,
    filter,
  ]);

  const handleSelect = (article: IViewedArticle) => {
    const pathToRemove = 'https://www.nytimes.com/';
    const path = article.url.replace('.html', '').replace(pathToRemove, '');
    history.push(`/${path}`);
  };

  const renderArticles = () => {
    return filteredValuesMemo.map((x, index) => (
      <ArticleItem key={index} article={x} onSelect={handleSelect} />
    ));
  };

  if (loading) return <>Loading...</>;

  return (
    <>
      <Tabs
        list={tabs}
        onSelect={(value) => setSelectedTab(value)}
        selectedTab={selectedTab}
      />
      <ArticleSearch onChange={(value) => setFilter(value)} value={filter} />
      {renderArticles()}
    </>
  );
}
