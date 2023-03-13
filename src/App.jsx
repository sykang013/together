import { Reset as ResetCss } from 'styled-reset';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './pages/Layout';
import MainPage from './pages/MainPage';
import GlobalStyle from './styles/GlobalStyle';

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
      // {
      //     path: '/contacts/:contactId',
      //     element: <Contact />,
      //     loader: contactLoader,
      //     action: contactAction,
      //   },
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
