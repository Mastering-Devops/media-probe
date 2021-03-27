import { render, screen } from '@testing-library/react';
import { routerMatch } from './tests';

test('It should renders Home', () => {
  const component = routerMatch(() => <div>Hello world</div>, {});
  render(component);
  const element = screen.getByText('Hello world');
  expect(element).toBeInTheDocument();
});
