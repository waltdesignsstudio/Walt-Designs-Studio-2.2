import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { Layout } from '../components/Layout';
import About from '../pages/About';
import '../index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Layout>
        <About />
      </Layout>
    </Router>
  </StrictMode>,
);
