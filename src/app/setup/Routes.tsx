import { Redirect, Route, Switch } from 'react-router';
import ArticleDetail from '../../components/article-detail/ArticleDetail';
import ArticleList from '../../components/article-list/ArticleList';
import { Layout } from '../../components/shared';

export default function Routes() {
  return (
    <Switch>
      <Route
        path="/"
        component={() => (
          <Layout>
            <Switch>
              <Route
                exact
                path={[
                  '/:year/:month/:day/:section/:reference',
                  '/:year/:month/:day/:section/:subsection/:reference',
                ]}
                component={ArticleDetail}
              />
              <Route exact path="/" component={ArticleList} />
              <Redirect to="/" />
            </Switch>
          </Layout>
        )}
      />
    </Switch>
  );
}
