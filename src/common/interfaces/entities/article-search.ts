import { IByline } from './byline';
import { IHeadline } from './headline';
import { IMultimedia } from './multimedia';

export interface IArticleSearch {
  abstract: string;
  web_url: string;
  source: string;
  lead_paragraph: string;
  pub_date: string;

  byline: IByline;
  headline: IHeadline;
  multimedia: IMultimedia[];
}
