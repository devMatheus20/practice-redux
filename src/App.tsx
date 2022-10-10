import { BrowserRouter as Router } from 'react-router-dom'

import { Provider } from 'react-redux'

import { store } from './store';

import MyRoutes from './routes/routes';

import Header from './components/Header';

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <MyRoutes />
      </Router>
    </Provider>
  );
}


