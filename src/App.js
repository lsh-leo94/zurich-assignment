import logo from './logo.svg';
import './App.css';
import PrivateRoute  from './components/auth/PrivateRoute';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Dashboard from './routes/Dashboard'
import Login from './routes/auth/login'
import Unauthorized from './routes/error/unauthorized'


const App = () => {
  const router = createBrowserRouter([
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/unauthorized',
      element: <Unauthorized />,
    },
    {
      path: "/",
      element: <PrivateRoute />,
      children:[{
        path: 'dashboard',
        element: <Dashboard />
      }]
    }
  ])
  return (
    <RouterProvider
      router={router}
    />
  );
}

export default App;
