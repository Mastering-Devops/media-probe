import {
  act,
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react';
import { useState } from 'react';
import Tabs from './Tabs';

const tabList = [
  { label: 'Tab 0', value: 0 },
  { label: 'Tab 1', value: 1 },
];

function ComponentToTest() {
  const [selected, setSelected] = useState(0);
  return (
    <Tabs
      selectedTab={selected}
      onSelect={(value) => setSelected(value)}
      list={tabList}
    />
  );
}

describe('tabs', () => {
  afterEach(cleanup);

  it('should be selected Tab 0', () => {
    render(<ComponentToTest />);
    const text = screen.getByText(tabList[0].label);
    expect(text).toBeInTheDocument();
  });

  it('should change to tab 1', () => {
    render(<ComponentToTest />);
    const tab0 = screen.getByText(tabList[0].label);
    act(() => {
      tab0.click();
    });
    const text = screen.getByText(tabList[1].label);
    expect(text).toBeInTheDocument();
  });
});
