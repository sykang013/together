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
import BaseLayoutForLanding from './pages/LayoutForLanding';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <ResetCss />
        <GlobalStyle />
        <Routes>
          <Route
            index
            element={
              <BaseLayoutForLanding>
                <LandingPage />
              </BaseLayoutForLanding>
            }
          />
          <Route
            path="landing"
            element={
              <BaseLayoutForLanding>
                <LandingPage />
              </BaseLayoutForLanding>
            }
          />
          <Route element={<Layout />}>
            <Route path="register" element={<RegisterPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route
              path="main"
              element={
                <PrivateRoute>
                  <MainPage />
                </PrivateRoute>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
