import { IMedia } from '../../common/interfaces/entities';

export interface ArticleImageProps {
  media: IMedia[];
  type?: ArticleImage;
  format?: ArticleImageFormat;
}

type ArticleImage = 'list' | 'detail';
export type ArticleImageFormat =
  | 'Standard Thumbnail'
  | 'mediumThreeByTwo210'
  | 'mediumThreeByTwo440';
