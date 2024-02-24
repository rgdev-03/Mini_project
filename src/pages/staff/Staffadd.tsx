import { NavBar } from '@/components/Navbar/Navbar';
import { AppShell, Grid} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { NativeSelect } from '@mantine/core';
import { Button,Group,Burger,Title} from '@mantine/core';
import classes from './staff.module.css';
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
        <Group h="100%" px="md"  >
          <Burger opened={mobileOpened} onClick={toggleMobile} hiddenFrom="sm" size="sm" />
            <Title order={4}>RYMEC PMS</Title>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar >
        <NavBar/>
      </AppShell.Navbar>

      <AppShell.Main>
        <Grid>

      <Grid.Col span={4}>
      <NativeSelect variant="filled" size="lg" w="300px" radius="lg" mt="40px" label="Name:" ml={20} data={['Name', 'Angular', 'Vue']}/>       
      </Grid.Col>

      <Grid.Col span={4}>
      <NativeSelect variant="filled" size="lg" w="300px" radius="lg" mt="40px" label="Branch:" ml={20} data={['Branch', 'Angular', 'Vue']}/>       
      </Grid.Col>

      <Grid.Col span={3}>
      <NativeSelect variant="filled" size="lg" w="300px" radius="lg" mt="40px" label="Department:" ml={20} data={['Department', 'Angular', 'Vue']}/>       
      </Grid.Col>

      <Grid.Col span={3}>
      <Button variant="filled" color="blue" size="lg" radius="lg"  ml={1030} mt={40}>Submit</Button>
      </Grid.Col>

    </Grid>
      </AppShell.Main>
    </AppShell>
  );
}