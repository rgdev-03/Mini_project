import { NavBar } from '@/components/stunav/Navbar';
import { AppShell, Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Grid } from '@mantine/core';
import { Button, Title, Burger } from '@mantine/core';
import { Table } from '@mantine/core';
import { Link } from 'react-router-dom';
import classes from '../Student/student.module.css';
import { StaffNavBar } from '@/components/staffnav/staffnav';

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
        <Group h="100%" px="md">
          <Burger opened={mobileOpened} onClick={toggleMobile} hiddenFrom="sm" size="sm" />
          <Title order={4}>RYMEC PMS</Title>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar>
        <StaffNavBar />
      </AppShell.Navbar>

      <AppShell.Main>
      <Group justify="center" mt={250} >
        <Title fz="100" c="#ffff">
          Hello Name
        </Title>
      </Group>
      </AppShell.Main>
    </AppShell>
  );
}
