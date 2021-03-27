import ArticleItem from './article-item/ArticleItem';
import { ArticleListProps } from './ArticleList.interface';
import './ArticleList.css';
import { useState } from 'react';
import { IArticle } from '../../common/interfaces/entities';
import ArticleDetail from '../article-detail/ArticleDetail';

export default function ArticleList({ articles }: ArticleListProps) {
  const [selected, setSelected] = useState<IArticle>();

  const renderArticles = () => {
    return articles.map((x, index) => (
      <ArticleItem
        key={index}
        article={x}
        onSelect={(article) => setSelected(article)}
      />
    ));
  };

  if (selected)
    return (
      <ArticleDetail article={selected} onBack={() => setSelected(undefined)} />
    );

  return <div className="article-list">{renderArticles()}</div>;
}
