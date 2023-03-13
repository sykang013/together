import { Reset as ResetCss } from 'styled-reset';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './pages/Layout';
import MainPage from './pages/MainPage';
import GlobalStyle from './styles/GlobalStyle';
import ProfilePage from './pages/ProfilePage';
import ProfileEdit from './pages/ProfileEdit';

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
        path: '/ProfilePage',
        element: <ProfilePage />,
        //     loader: contactLoader,
        //     action: contactAction,
      },
      {
        path: '/ProfileEdit',
        element: <ProfileEdit />,
        //     loader: contactLoader,
        //     action: contactEditAction,
      },
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
