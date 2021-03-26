import ArticleItem from '../article-item/ArticleItem';
import { ArticleListProps } from './ArticleList.interface';
import './ArticleList.css';

export default function ArticleList({ articles }: ArticleListProps) {
  const renderArticles = () => {
    return articles.map((x, index) => <ArticleItem key={index} article={x} />);
  };

  return <div className="article-list">{renderArticles()}</div>;
}
