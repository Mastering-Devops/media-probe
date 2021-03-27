import { IArticle } from '../../common/interfaces/entities';

export interface ArticleDetailProps {
  article: IArticle;
  onBack: () => void;
}
