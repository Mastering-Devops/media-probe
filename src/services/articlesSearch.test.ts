import { cleanup } from '@testing-library/react';
import * as articlesSearch from './articlesSearch';

jest.mock('./articlesSearch.ts');

describe('articlesSearch service', () => {
  afterEach(() => {
    jest.clearAllMocks();
    cleanup();
  });

  it('searchArticles works', () => {
    expect.assertions(1);
    return expect(
      articlesSearch.searchArticles('', '', '', '', '', ''),
    ).resolves.toHaveLength(1);
  });
});
