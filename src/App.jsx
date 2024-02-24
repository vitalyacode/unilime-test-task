import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage';
import { ROUTES } from './constants/routes';
import { InvalidRouteRedirecter } from './pages/InvalidRouteRedirecter';
import { ProductsPage } from './pages/ProductsPage';
import { MainLayout } from './layout/MainLayout';
import { Protected } from './components/Protected';
import { useStore } from 'react-redux';
import { setUpInterceptor } from './api/httpClient';

function App() {
  const store = useStore();
  setUpInterceptor(store);
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path={ROUTES.LOGIN} element={<LoginPage />} />
          <Route
            path={ROUTES.PRODUCTS}
            element={
              <Protected>
                <ProductsPage />
              </Protected>
            }
          />
          <Route path={ROUTES.ANY_INVALID} element={<InvalidRouteRedirecter />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
