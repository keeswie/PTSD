import { Route, Switch } from 'react-router-dom';
import AllProductsPage from './pages/AllProductsPage';
import DetailProductPage from './pages/DetailProductPage';
import CustomerInfoPage from './pages/CustomerInfoPage';
import CustomerSearchPage from './pages/CustomerSearchPage';
import Layout from './component/layout/Layout';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/products' exact>
          <AllProductsPage />
        </Route>
        <Route path='/products/:barcode' component={DetailProductPage}>
          <DetailProductPage />
        </Route>
        <Route path= '/customers/:id' component={CustomerInfoPage}>
          <CustomerInfoPage/>
        </Route>
        <Route path='/customers/:id' component={CustomerSearchPage}>
          <CustomerSearchPage/>
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;