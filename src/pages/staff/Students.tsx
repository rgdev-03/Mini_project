import { AppShell, Burger, Group, Grid, Card, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '@mantine/core';
import { StaffNavBar } from '@/components/staffnav/staffnav';
import classes from '../Student/student.module.css';
const items = [
  { title: 'HomePage', href: '/homepage' },
  { title: 'Students', href: '/students' },
].map((item, index) => (
  <Link to={item.href} key={index}>
    {item.title}
  </Link>
));
export function Students() {
  const [opened, { toggle }] = useDisclosure();
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
        <Grid w="70rem" ml="md">
          <Grid.Col span={4}>
            <Link to="/addstudents">
              <Card shadow="sm" padding="xl" radius="md" h="100px" mt="lg" withBorder>
                <text>Add Students</text>
              </Card>
            </Link>
          </Grid.Col>

          <Grid.Col span={4} pl="20px">
            <Link to="/exportstudents">
              <Card shadow="sm" padding="xl" radius="md" h="100px" mt="20px" withBorder>
                <text>Export Students</text>
              </Card>
            </Link>
          </Grid.Col>
        </Grid>
      </AppShell.Main>
    </AppShell>
  );
}
