

import { NavBar } from '@/components/staffnav/Navbar';

import { AppShell, Group} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Grid,} from '@mantine/core';
import { Button,Title,Burger } from '@mantine/core';
import { Table } from '@mantine/core';
import { Link } from 'react-router-dom';
import classes from './staff.module.css';


export function FacultyLand() {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);
 
  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
      }}
      padding="md"
      bg="#2D3250"
      > 
        <AppShell.Header className={classes.header}>
        <Group h="100%" px="md"  >
          <Burger opened={mobileOpened} onClick={toggleMobile} hiddenFrom="sm" size="sm" />
            <Title order={4}>RYMEC PMS</Title>
        </Group>
      </AppShell.Header>

      
      <AppShell.Navbar >
        <NavBar/>
      </AppShell.Navbar>

      <AppShell.Main>
        </AppShell.Main>
    </AppShell>
  );
}