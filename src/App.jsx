import { Reset as ResetCss } from 'styled-reset';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';
import Layout from './pages/Layout';
import MainPage from './pages/MainPage';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';
import ProfileEdit from './pages/ProfileEdit';
import ProfileCRUD from './pages/ProfileCRUD';

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
        path: 'profilePage',
        element: <ProfilePage />,
        //     loader: contactLoader,
        //     action: contactAction,
      },
      {
        path: 'profileEdit',
        element: <ProfileEdit />,
        //     loader: contactLoader,
        //     action: contactEditAction,
      },
      {
        path: 'profileCRUD',
        element: <ProfileCRUD />,
        //     action: destoryAction,
        //     errorElement: <div role="alert">Oops! There was an error.</div>,
      },
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
