import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import PrivateRoute from './pages/PrivateRoute';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
import Header from './components/Header';

const Layout = ({ children }) => (
  <>
    <Header />
    {children}
  </>
);

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route path="/iniciar-sesion" element={<Login />} />
          <Route path="/crear-cuenta" element={<Register />} />
          <Route element={<PrivateRoute />}>
            <Route
              path="/mi-perfil"
              element={
                <Layout>
                  <Profile />
                </Layout>
              }
            />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
