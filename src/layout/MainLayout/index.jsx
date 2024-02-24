import { Header } from '../../components/Header';
import './styles.css';

export const MainLayout = ({ children }) => {
  return (
    <div className="mainLayout">
      <Header />
      <main className="mainContainer">{children}</main>
    </div>
  );
};
