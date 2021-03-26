import { useState, useEffect } from 'react';
import { NewsApi } from '../services/articles';
import ArticleList from '../components/article-list/ArticleList';
import { IArticle } from '../common/interfaces/entities';
// import { defaultValues } from './articles';
import './App.css';

export default function App() {
  const [articles, setArticles] = useState<IArticle[]>([]);

  useEffect(() => {
    NewsApi.getArticles()
      .then(({ data: { results } }) => {
        const orderedArticles = [...results];
        orderedArticles.sort(
          (a, b) =>
            new Date(b['published_date']).getTime() -
            new Date(a['published_date']).getTime(),
        );
        setArticles(orderedArticles);
      })
      .catch((error) => alert(JSON.stringify(error.message)));

    return () => setArticles([]);
  }, []);

  // useEffect(() => {
  //   const orderedArticles = [...defaultValues];
  //   orderedArticles.sort(
  //     (a, b) =>
  //       new Date(a['published_date']).getTime() -
  //       new Date(b['published_date']).getTime(),
  //   );
  //   setArticles(orderedArticles);
  // }, []);

  return (
    <div className="App-container">
      <ArticleList articles={articles} />
    </div>
  );
}
