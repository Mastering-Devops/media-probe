import {
  IArticleSearch,
  IViewedArticle,
} from '../../common/interfaces/entities';
import { Period } from '../../common/types';

const viewedArticles: IViewedArticle[] = [
  {
    abstract: 'Abstract',
    byline: 'By Me',
    media: [],
    published_date: '2021-03-25',
    title: 'Title',
    url: '',
  },
];

const articleSearches: IArticleSearch[] = [
  {
    abstract: 'Abstract',
    multimedia: [],
    pub_date: '2021-03-25',
    headline: {
      main: 'Title',
    },
    byline: {
      original: 'By me',
    },
    lead_paragraph: '',
    source: '',
    web_url: '',
  },
];

export function getArticles(period: Period = '7'): Promise<IViewedArticle[]> {
  return new Promise((resolve, reject) => {
    process.nextTick(() => resolve(viewedArticles));
  });
}

export function searchArticles(
  year: string,
  month: string,
  day: string,
  section: string,
  subsection: string,
  title: string,
): Promise<IArticleSearch[]> {
  return new Promise((resolve, reject) => {
    process.nextTick(() => resolve(articleSearches));
  });
}
