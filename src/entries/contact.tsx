import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { Layout } from '../components/Layout';
import Contact from '../pages/Contact';
import '../index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Layout>
        <Contact />
      </Layout>
    </Router>
  </StrictMode>,
);
