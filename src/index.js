import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './redux/store';
import Categories from './components/Categories';

const router = createBrowserRouter([
  {
    path: '*',
    element: <App />,
  },
  {
    path: '/categories',
    element: <Categories />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
