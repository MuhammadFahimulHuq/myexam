import NavbarOne from './components/navbar/NavbarOne';
import classess from './App.css';
import LoginSection from './components/Login/LoginSection';
import Layout from './layouts/Layout';
import Footer from './components/footers/Footer';

function App() {
  return (
    <div className={classess.App}>
      <Layout>
      <NavbarOne />
    <LoginSection />

    <Footer />
      </Layout>

    </div>
  );
}

export default App;
