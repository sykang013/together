import { Reset as ResetCss } from 'styled-reset';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';
import Layout from './pages/Layout';
import MainPage from './pages/MainPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import SearchPage from './pages/SearchPage';
import BaseLayoutForLanding from './pages/LayoutForLanding';
import LandingPage from './pages/LandingPage';

const routesConfig = [
  {
    path: '/',
    element: <Layout />,
    // errorElement: <NotFound />,
    // loader: rootLoader,
    // action: rootAction,
    children: [
      // {
      // errorElement: <NotFound />,
      // children: [
      { index: true, element: <MainPage /> },

      {
        path: 'register',
        element: <RegisterPage />,
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: '/search',
        element: <SearchPage />,
      },
      //   {
      //     path: '/contacts/:contactId/edit',
      //     element: <ContactEdit />,
      //     loader: contactLoader,
      //     action: contactEditAction,
      //   },
      //   {
      //     path: '/contacts/:contactId/destory',
      //     action: destoryAction,
      //     errorElement: <div role="alert">Oops! There was an error.</div>,
      //   },
    ],
  },
  // ],
  // },
  {
    path: '/',
    element: <BaseLayoutForLanding />,
    // errorElement: <NotFound />,
    // loader: rootLoader,
    // action: rootAction,
    children: [
      // {
      // errorElement: <NotFound />,
      // children: [
      // { index: true, element: <MainPage /> },
      {
        path: 'landing',
        element: <LandingPage />,
      },
      //   {
      //     path: '/contacts/:contactId/edit',
      //     element: <ContactEdit />,
      //     loader: contactLoader,
      //     action: contactEditAction,
      //   },
      //   {
      //     path: '/contacts/:contactId/destory',
      //     action: destoryAction,
      //     errorElement: <div role="alert">Oops! There was an error.</div>,
      //   },
    ],
  },
  // ],
  // },
  {
    path: '/',
    element: <BaseLayoutForLanding />,
    // errorElement: <NotFound />,
    // loader: rootLoader,
    // action: rootAction,
    children: [
      // {
      // errorElement: <NotFound />,
      // children: [
      // { index: true, element: <MainPage /> },
      {
        path: 'landing',
        element: <LandingPage />,
      },
      //   {
      //     path: '/contacts/:contactId/edit',
      //     element: <ContactEdit />,
      //     loader: contactLoader,
      //     action: contactEditAction,
      //   },
      //   {
      //     path: '/contacts/:contactId/destory',
      //     action: destoryAction,
      //     errorElement: <div role="alert">Oops! There was an error.</div>,
      //   },
    ],
  },
  // ],
  // },
];

const router = createBrowserRouter(routesConfig);

const App = () => {
  return (
    <>
      <ResetCss />
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
