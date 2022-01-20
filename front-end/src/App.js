import { Route, Switch } from 'react-router-dom';
import AllPropertiesPage from './pages/AllPropertiesPage';
import DetailPropertyPage from './pages/DetailPropertyPage'
import Layout from './component/layout/Layout'
import AllLocationPage from './pages/AllLocationPage';
import SupplyOrderPage from './pages/SupplyOrderPage'
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
        <Route path='/locations' exact>
          <AllLocationPage/>
        </Route>
        <Route path='/supplyorder' exact>
          <SupplyOrderPage/>
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;