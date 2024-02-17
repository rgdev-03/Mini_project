import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Landing } from './pages/Landing/Landing';
import { About } from './pages/About/About';
import {Navbar} from './components/Navbar/Navbar'
import { Staff } from './pages/staff/Staff';
import {Staffadd} from './pages/staff/Staffadd';
import { Students } from './pages/Students';
import {Academics} from './pages/Academics';
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
  {
    path: '/students',
    element: <Students/>,
  },
  {
    path: '/academics',
    element: <Academics/>,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
