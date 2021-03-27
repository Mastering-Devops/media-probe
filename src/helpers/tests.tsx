import { createMemoryHistory, MemoryHistory } from 'history';
import { Route, Router } from 'react-router';

interface IMatchParams {
  path?: string;
  route?: string;
  history?: MemoryHistory;
}

export function routerMatch(
  component: React.ComponentType,
  {
    path = '/',
    route = '/',
    history = createMemoryHistory({ initialEntries: [route] }),
  }: IMatchParams,
) {
  return (
    <Router history={history}>
      <Route path={path} component={component} />
    </Router>
  );
}
