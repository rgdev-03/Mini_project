import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Landing } from './pages/Landing/Landing';
import { About } from './pages/About/About';
import {NavBar} from './components/Navbar/Navbar'
import { Staff } from './pages/staff/Staff';
import {Staffadd} from './pages/staff/Staffadd';
import { Students } from './pages/staff/Students';
import {Academics} from './pages/staff/Academics';
import { Login } from './pages/Login/faculty/Welcome';
import { FacultyLand } from './pages/staff/facultyland';

const router = createBrowserRouter([

  {
    path:'/login',
    element:<Login/>,
  },
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
    element: <NavBar/>,
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
  {
    path: '/facultyland',
    element: <FacultyLand/>,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
