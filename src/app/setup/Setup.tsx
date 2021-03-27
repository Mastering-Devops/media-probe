import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';

export default function Setup() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}
