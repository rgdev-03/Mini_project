import { NavBar } from '@/components/stunav/Navbar';
import { AppShell, Grid } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { NativeSelect } from '@mantine/core';
import { Button, Group, Burger, Title, TextInput } from '@mantine/core';
import classes from '../Student/student.module.css';
import { StaffNavBar } from '@/components/staffnav/staffnav';
export function Staffadd() {
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
        <Grid>
          <Grid.Col span={4}>
            <TextInput
              variant="filled"
              size="md"
              radius="md"
              label="Staff Name"
              placeholder="Enter the Staff Name"
            />{' '}
          </Grid.Col>

          <Grid.Col span={4}>
            <TextInput
              variant="filled"
              size="md"
              radius="md"
              label="Branch Name"
              placeholder="Enter the Branch"
            />{' '}
          </Grid.Col>

          <Grid.Col span={4}>
            <TextInput
              variant="filled"
              size="md"
              radius="md"
              label="Staff Name"
              placeholder="Input placeholder"
            />{' '}
          </Grid.Col>
        </Grid>
        <Group justify="right" mt="lg">
          <Button variant="filled" color="blue" size="lg" radius="lg">
            Submit
          </Button>
        </Group>
      </AppShell.Main>
    </AppShell>
  );
}
