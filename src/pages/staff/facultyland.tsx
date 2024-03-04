import { AppShell, Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Title, Burger } from '@mantine/core';
import classes from '../Student/student.module.css';
import { StaffNavBar } from '@/components/staffnav/staffnav';
import { getFacID, getFacName } from '@/utils/fietchFacID';

export function FacultyLand() {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);


  const faculty = getFacName();
  // console.log(faculty);

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
        <Title fz="50" c="#ffff">
          Hello {faculty}!!!
        </Title>
      </Group>
      </AppShell.Main>
    </AppShell>
  );
}
