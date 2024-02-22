import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Landing } from './pages/Landing/Landing';
import { About } from './pages/About/About';
import { NavBar } from './components/NavBar/NavBar';
import { Login } from './pages/Login/student/student-login';
import { StudentLanding } from './pages/Student/StuLanding';
import { StudentCertificates } from './pages/Student/stucertificates';
import { AddCertificates } from './pages/Student/AddCertificate';
import { AddSemMarks } from './pages/Student/AddSemMarks';
import { Academics } from './pages/Student/Academics';
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
    path: '/nav',
    element: <NavBar/>,
  },
  {
    path: '/login',
    element: <Login/>,
  },
  {
    path: '/stuland',
    element: <StudentLanding/>,
  },
  {
    path: '/stucertificates',
    element: <StudentCertificates/>,
  },
  {
    path: '/addcertificates',
    element: <AddCertificates/>,
  },
  {
    path: '/academics',
    element: <Academics/>,
  },
  {
    path: '/addsemmarks',
    element: <AddSemMarks/>,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
