import { useMemo, useState } from 'react';
import ArticleItem from './article-item/ArticleItem';
import { IViewedArticle } from '../../common/interfaces/entities';
import ArticleSearch from '../article-search/ArticleSearch';
import { useHistory } from 'react-router';
import { Period } from '../../common/types';
import Tabs from '../shared/tabs/Tabs';
import { tabs } from './ArticleList.constants';
import { useViewedArticles } from './ArticleList.hooks';

export const filteredValues = (articles: IViewedArticle[], filter: string) => {
  let data = [...articles];
  data = data.filter(
    (x) =>
      x.title.toLowerCase().indexOf(filter.toLowerCase().trim()) > -1 ||
      x.byline.toLowerCase().indexOf(filter.toLowerCase().trim()) > -1,
  );
  return data;
};

export default function ArticleList() {
  const history = useHistory();
  const [selectedTab, setSelectedTab] = useState<Period>('7');
  const [filter, setFilter] = useState('');
  const [loading, articles] = useViewedArticles(selectedTab);

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

  return (
    <>
      <Tabs
        list={tabs}
        onSelect={(value) => {
          setFilter('');
          setSelectedTab(value);
        }}
        selectedTab={selectedTab}
      />
      <ArticleSearch onChange={(value) => setFilter(value)} value={filter} />
      {(!loading && renderArticles()) || <>Loading...</>}
    </>
  );
}
