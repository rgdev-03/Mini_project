import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Landing } from './pages/Landing/Landing';
import { StuLogin } from './pages/Login/student/student-login';
import { StudentLanding } from './pages/Student/StuLanding';
import { StudentCertificates } from './pages/Student/stucertificates';
import { AddCertificates } from './pages/Student/AddCertificate';
import { StuProjects } from './pages/Student/stuprojects';
import { AddProjects } from './pages/Student/addprojects';
import { StuAcademics } from './pages/Student/stuacademics';
import { AddSemMarks } from './pages/Student/AddSemMarks';
import { About } from './pages/About/About';
import { Staff } from './pages/staff/Staff';
import { Staffadd } from './pages/staff/Staffadd';
import { ExportStudents } from './pages/staff/exportStudents';
import { Academics } from './pages/staff/Academics';
import { FacultyLand } from './pages/staff/facultyland';
import { StaffLogin } from './pages/Login/faculty/Welcome';
import { Achievements } from './pages/staff/Acheviments';
import { StudentsAdd } from './pages/staff/addstudents';
import { Students } from './pages/staff/students';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing/>,
  },
  {
    path: '/about',
    element: <About/>,
  },
  {
    path: '/login',
    element: <StuLogin/>,
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
    path: '/stuacademics',
    element: <StuAcademics/>,
  },
  {
    path: '/addsemmarks',
    element: <AddSemMarks/>,
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
    path: '/exportstudents',
    element: <ExportStudents/>,
  },
  {
    path: '/addstudents',
    element: <StudentsAdd/>,
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
    path: '/acheviments',
    element: <Achievements/>,
  },
  {
    path: '/facultyland',
    element: <FacultyLand/>,
  },
  {
    path: '/stafflogin',
    element: <StaffLogin/>,
  },
]);


export function Router() {
  return <RouterProvider router={router} />;
}


