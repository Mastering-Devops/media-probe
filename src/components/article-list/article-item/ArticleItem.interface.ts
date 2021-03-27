import { IArticle } from '../../../common/interfaces/entities';

export interface ArticleItemProps {
  article: IArticle;
  onSelect: (value: IArticle) => void;
}
