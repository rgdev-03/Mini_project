import { useEffect, useState } from 'react';
import { Group, Code, NavLink } from '@mantine/core';
import {
  IconLayoutDashboard,
  IconSchool,
  IconMan,
  IconCertificate,
  IconNotebook,
  IconBrandMinecraft,
  IconUser,
  IconSwitchHorizontal,
  IconLogout,
} from '@tabler/icons-react';
import classes from '../stunav/Navbar.module.css';
import { Link } from 'react-router-dom';
import { isAdmin, useIsAdmin } from '@/utils/fietchFacID';
import {  logout } from '@/utils/fetchUser';




export function StaffNavBar() {

  const admin = isAdmin();
  console.log(admin);




  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarMain}>
        <Group className={classes.header} justify="space-between">
          <Link to="/facultyland">
            <NavLink
              label="Dashboard"
              className={classes.link}
              leftSection={<IconLayoutDashboard />}
            />
          </Link>

          {admin &&(
          <Link to="/staff">
            <NavLink leftSection={<IconSchool />} label="Staff" className={classes.link} />
          </Link>
          )}
          <Link to="/students">
            <NavLink leftSection={<IconMan />} label="Students" className={classes.link} />
          </Link>
          <Link to="/acheviments">
            <NavLink leftSection={<IconCertificate />} label="Skills" className={classes.link} />
          </Link>
          <Link to="/academics">
            <NavLink leftSection={<IconNotebook />} label="Academics" className={classes.link} />
          </Link>

          {admin &&(
          <Link to="/admin">
            <NavLink leftSection={<IconUser />} label="Admin" className={classes.link} />
          </Link>
          )}
        </Group>
      </div>
      <div className={classes.footer}>
        <Link onClick={logout} className={classes.link}>
          <IconLogout className={classes.linkIcon} stroke={1.5} />
          <span>Logout</span>
        </Link>
      </div>
    </nav>
  );
}
