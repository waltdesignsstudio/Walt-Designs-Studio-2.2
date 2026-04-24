import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { Layout } from '../components/Layout';
import Services from '../pages/Services';
import '../index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Layout>
        <Services />
      </Layout>
    </Router>
  </StrictMode>,
);
