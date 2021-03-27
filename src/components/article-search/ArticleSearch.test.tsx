import { fireEvent, render } from '@testing-library/react';
import { useState } from 'react';
import ArticleSearch from './ArticleSearch';

function ComponentToTest() {
  const [state, setState] = useState('');
  return <ArticleSearch value={state} onChange={setState} />;
}

const setup = () => {
  const utils = render(<ComponentToTest />);
  const input = utils.getByTestId('search-input') as HTMLInputElement;
  return {
    input,
    ...utils,
  };
};

test('It should allow type', () => {
  const { input } = setup();
  expect(input.value).toBe('');
  fireEvent.change(input, { target: { value: 'Good Day' } });
  expect(input.value).toBe('Good Day');
});
