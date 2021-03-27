import { mount } from 'enzyme';
import Setup from './Setup';

test('renders Setup without crashing', () => {
  const wrapper = mount(<Setup />);
  expect(wrapper).toBeTruthy();
});
