import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Landing } from './pages/Landing/Landing';
import { About } from './pages/About/About';
import {NavBar} from './components/Navbar/Navbar'
import { Staff } from './pages/staff/Staff';
import {Staffadd} from './pages/staff/Staffadd';
<<<<<<< HEAD
import { Students } from './pages/Students';
import {Academics} from './pages/Academics';
import {HomePage} from './pages/Home.page';
import { Login } from './components/Login/Welcome';
import { FacultyLand } from './pages/staff/facultyland';
=======
import { Students } from './pages/staff/Students';
import {Academics} from './pages/staff/Academics';
import { Login } from './pages/Login/faculty/Welcome';
>>>>>>> 381ae4d03cdf5139c0e6a20fd817ffb91d966e15
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
