import { Header } from '../../Header';
import './styles.css';

export const MainLayout = ({ children }) => {
  <div className="mainLayout">
    <Header />
    <main>{children}</main>;
  </div>;
};
