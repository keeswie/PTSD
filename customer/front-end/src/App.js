import { Route, Switch } from 'react-router-dom';
import AllPropertiesPage from './pages/AllPropertiesPage';
import DetailPropertyPage from './pages/DetailPropertyPage'
import Layout from './component/layout/Layout'

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/products' exact>
          <AllPropertiesPage />
        </Route>
        <Route path='/products/:barcode' component={DetailPropertyPage}>
          <DetailPropertyPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;