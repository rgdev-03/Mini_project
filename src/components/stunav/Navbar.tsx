
import { useState } from 'react';
import { Group, Code,NavLink } from '@mantine/core';
import {
    IconSwitchHorizontal,
    IconLogout,
    IconUserCircle,
    IconCertificate,
    IconBrandGoogleAnalytics,
    IconSettings,
    IconFileCode2
} from '@tabler/icons-react';
import classes from './NavBar.module.css';
import { Link } from 'react-router-dom';



export function NavBar() {

  return (
    <nav className={classes.navbar} >
      <div className={classes.navbarMain}>
        <Group className={classes.header} justify="space-between" >
          <Link to="/stuland">
        <NavLink
        label="Profile"
        leftSection={< IconUserCircle size="2rem"  />}
        className={classes.link}
        />
        </Link>
        <Link to="/stucertificates">
         <NavLink
        href="#required-for-focus"
        label="Certificates"
        leftSection={< IconCertificate size="2rem"  />}
        className={classes.link}
        />
        </Link>
        <Link to="/academics">
         <NavLink
        href="#required-for-focus"
        label="Academics"
        leftSection={< IconBrandGoogleAnalytics size="2rem" />}
        className={classes.link}
        />
        </Link>
        {/* <Link to="#">
         <NavLink
        href="#required-for-focus"
        label="Settings"
        leftSection={< IconSettings size="2rem"  />}
        className={classes.link}
        />
        </Link> */}
         <Link to="/stuprojects">
         <NavLink
        href="#required-for-focus"
        label="Projects"
        leftSection={< IconFileCode2 size="2rem" />}
        className={classes.link}
        />
        </Link>
        </Group>
      </div>
    </nav>
  );
}