import { IArticleSearch } from '../../common/interfaces/entities';

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
