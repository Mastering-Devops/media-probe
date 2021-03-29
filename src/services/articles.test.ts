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
    return articles
      .getArticles('7')
      .then((result) => expect(result).toHaveLength(1));
  });
});
