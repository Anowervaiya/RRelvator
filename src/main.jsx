import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Main from './Layout/Main';
import HomeContainer from './Pages/Home/HomeContainer/HomeContainer';
import AboutContainer from './Pages/About/AboutContainer/AboutContainer';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <HomeContainer></HomeContainer>,
      },
      {
        path: '/about',
        element: <AboutContainer></AboutContainer>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
