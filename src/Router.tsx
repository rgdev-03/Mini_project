import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Landing } from './pages/Landing/Landing';
import { Login } from './pages/Login/student/student-login';
import { StudentLanding } from './pages/Student/StuLanding';
import { StudentCertificates } from './pages/Student/stucertificates';
import { AddCertificates } from './pages/Student/AddCertificate';
import { StuProjects } from './pages/Student/stuprojects';
import { AddProjects } from './pages/Student/addprojects';
import { Academics } from './pages/Student/Academics';
import { AddSemMarks } from './pages/Student/AddSemMarks';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing/>,
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
    path: '/stuprojects',
    element: <StuProjects/>,
  },
  {
    path: '/addprojects',
    element: <AddProjects/>,
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
