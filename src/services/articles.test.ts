import { cleanup } from '@testing-library/react';
import * as articles from './articles';

jest.mock('./articles.ts');

describe('articles service', () => {
  afterEach(() => {
    jest.clearAllMocks();
    cleanup();
  });

  it('getArticles works', () => {
    expect.assertions(1);
    return expect(articles.getArticles('7')).resolves.toHaveLength(1);
  });

  it('searchArticles works', () => {
    expect.assertions(1);
    return expect(
      articles.searchArticles('', '', '', '', '', ''),
    ).resolves.toHaveLength(1);
  });
});
