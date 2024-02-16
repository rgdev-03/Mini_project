import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Landing } from './pages/Landing/Landing';
import { About } from './pages/About/About';
import {Navbar} from './pages/Navbar/Navbar'
import { Staff } from './pages/Staff';
import {Staffadd} from './pages/Staffadd';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />,
  },
  {
    path: '/about',
    element: <About/>,
  },
  {
    path: '/navbar',
    element: <Navbar/>,
  },
  {
    path: '/staff',
    element: <Staff/>,
  },
  {
    path: '/staffadd',
    element: <Staffadd/>,
  },

]);

export function Router() {
  return <RouterProvider router={router} />;
}
