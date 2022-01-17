import { Route, Switch } from 'react-router-dom';
import AllPropertiesPage from './pages/AllPropertiesPage';
import NewPropertyPage from './pages/NewPropertyPage';
import DetailPropertyPage from './pages/DetailPropertyPage'
import SearchProductPage from './pages/SearchProductPage';
import Layout from './component/layout/Layout'

function App() {
  return (
    <Layout>
      <Switch>
      <Route path='/' exact>
          <SearchProductPage />
        </Route>
        <Route path='/products' exact>
          <AllPropertiesPage />
        </Route>
        <Route path='/products/newProperty'>
          <NewPropertyPage />
        </Route>
        <Route path='/products/:barcode' component={DetailPropertyPage}>
          <DetailPropertyPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;