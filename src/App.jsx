import { Reset as ResetCss } from 'styled-reset';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';
import Layout from './pages/Layout';
import MainPage from './pages/MainPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import SearchPage from './pages/SearchPage';
import Landigpage from './pages/LandingPage';
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
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: '/search',
        element: <SearchPage />,
      },
      {
        path: 'landing',
        element: <Landigpage />,
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
