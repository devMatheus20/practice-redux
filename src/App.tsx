import { BrowserRouter as Router } from 'react-router-dom'

import MyRoutes from './routes/routes';

import Header from './components/Header';

export default function App() {
  return (
    <Router>
      <Header />
      <MyRoutes />
    </Router>
  );
}


