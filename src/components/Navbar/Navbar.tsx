import { Group, Code,NavLink,Text } from '@mantine/core';
import {
  IconLayoutDashboard,
  IconMan,
  IconSchool,
  IconCertificate,
  IconBrandMinecraft,
  IconNotebook
} from '@tabler/icons-react';

import classes from './Navbar.module.css';
import { Link } from 'react-router-dom';



export function Navbar() {
  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarMain}>
        <Text className={classes.name}>Mini-Project</Text>
        <Link to="/homepage">
        <NavLink
        label="Dashboard"
        className={classes.link}
        leftSection={<IconLayoutDashboard/>}
      />
        </Link>
     <Link to="/staff">
        <NavLink
        leftSection={<IconSchool/>}
        label="Staff"
        className={classes.link}
    
      />
      </Link>
      <Link to="/students">
        <NavLink
        leftSection={<IconMan/>}
        label="Students"
        className={classes.link}
    
      />
      </Link>
      <Link to="#">
        <NavLink
        leftSection={<IconCertificate/>}
        label="Achievements"
        className={classes.link}
    
      />
      </Link>
      <Link to="/academics">
        <NavLink
        leftSection={<IconNotebook/>}
        label="Academics"
        className={classes.link}
    
      />
      </Link>
      <Link to="#">
        <NavLink
        leftSection={<IconBrandMinecraft/>}
        label="Admin"
        className={classes.link}
    
      />
      </Link>
      </div>

 
 </nav>
);
}