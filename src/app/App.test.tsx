import { mount } from 'enzyme';
import App from './App';
import Setup from './setup/Setup';

test('contains Setup component', () => {
  const wrapper = mount(<App />);
  expect(wrapper.contains(<Setup />)).toBeTruthy();
});
