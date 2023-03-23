import { Reset as ResetCss } from 'styled-reset';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';
import Layout from './pages/Layout';
import MainPage from './pages/MainPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import LandingPage from './pages/LandingPage';
import PrivateRoute from './PrivateRoute';
import NotFound from './pages/NotFound';
import ProfilePage from './pages/ProfilePage';
import ProfileCRUD from './pages/ProfileCRUD';
import ProfileEdit from './pages/ProfileEdit';
import SearchPage from './pages/SearchPage';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <ResetCss />
        <GlobalStyle />
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<LandingPage />} />
            <Route path="landing" element={<LandingPage />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="profile-page" element={<ProfilePage />} />
            <Route path="profile-edit" element={<ProfileEdit />} />
            <Route path="profile-crud" element={<ProfileCRUD />} />
            <Route
              path="main"
              element={
                <PrivateRoute>
                  <MainPage />
                </PrivateRoute>
              }
            />
            <Route path="search" element={<SearchPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
