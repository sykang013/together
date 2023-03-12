import { Reset as ResetCss } from 'styled-reset';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './pages/Layout';
import MainPage from './pages/MainPage';

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

function App() {
  return (
    <>
      <ResetCss />
      <RouterProvider router={router} />
      <MainPage />
    </>
  );
}

export default App;
