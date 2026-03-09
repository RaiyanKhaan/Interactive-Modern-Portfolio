import './App.css';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/layout/Layout';
import Home from './pages/Home';

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <Layout>
          <Home />
        </Layout>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
