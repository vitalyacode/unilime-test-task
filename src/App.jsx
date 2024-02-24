import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage';
import { ROUTES } from './constants/routes';
import { InvalidRouteRedirecter } from './pages/InvalidRouteRedirecter';
import { ProductsPage } from './pages/ProductsPage';
import { MainLayout } from './layout/MainLayout';

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path={ROUTES.LOGIN} element={<LoginPage />} />
          <Route path={ROUTES.PRODUCTS} element={<ProductsPage />} />
          <Route path={ROUTES.ANY_INVALID} element={<InvalidRouteRedirecter />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
