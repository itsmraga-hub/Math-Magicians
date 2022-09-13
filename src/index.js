import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import App from './App';
import HomeDisplay from './routes/Home';
import Quote from './routes/Quote';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<HomeDisplay />} />
      <Route path="calculator" element={<App />} />
      <Route path="quote" element={<Quote />} />
    </Routes>
  </Router>,
);
