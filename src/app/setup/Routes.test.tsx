import { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';

test('renders Routes without crashing', () => {
  const wrapper = mount(
    <BrowserRouter>
      <Routes />
    </BrowserRouter>,
  );
  expect(wrapper).toBeTruthy();
});
