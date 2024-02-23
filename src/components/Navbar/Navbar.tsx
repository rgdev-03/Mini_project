import { useState } from 'react';
import { Group, Code,NavLink } from '@mantine/core';
import {
  IconLayoutDashboard,
  IconSchool,
  IconMan,
    IconCertificate,
    IconNotebook,
    IconBrandMinecraft
} from '@tabler/icons-react';
import classes from './Navbar.module.css';
import { Link } from 'react-router-dom';
<<<<<<< HEAD



export function NavBar() {

=======
export function Navbar() {
>>>>>>> 381ae4d03cdf5139c0e6a20fd817ffb91d966e15
  return (
    <nav className={classes.navbar} >
      <div className={classes.navbarMain}>
<<<<<<< HEAD
        <Group className={classes.header} justify="space-between" >
        <Link to="/facultyland">
=======
        <Text className={classes.name}>Mini-Project</Text>
        <Link to="/navbar">
>>>>>>> 381ae4d03cdf5139c0e6a20fd817ffb91d966e15
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

        </Group>
      </div>
    </nav>
  );
}