import { NavBar } from '@/components/stunav/Navbar';
import { AppShell, Burger, Group, Skeleton, Title,Text, Box,Avatar,Card,Table, TableData,Grid} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './student.module.css'
const academics: TableData = {
    head: ['SEMESTER', 'SGPA', ],
    body: [
      [1,8.9],
      [1,8.9],
      [1,8.9],
      [1,8.9],
      [1,8.9],
      [1,8.9],
      [1,8.9],
      [1,8.9],
      [1,8.9],
    ],
  };
  const acheviments: TableData = {
    head: ['Certificate-Name', 'Organization','Issued-date' ],
    body: [
      ["Java FullStack","Channel-Btech","01-04-2023"],
      ["Java FullStack","Channel-Btech","01-04-2023"],
      ["Java FullStack","Channel-Btech","01-04-2023"],
      ["Java FullStack","Channel-Btech","01-04-2023"],
      ["Java FullStack","Channel-Btech","01-04-2023"],
    ],
  };
export function StudentLanding() {
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
      <AppShell.Navbar style={{border:"none",backgroundColor:"#2D3250", width:"311px"}}>
       <NavBar/>
      </AppShell.Navbar>
      <AppShell.Main c="white">
      <Group justify="space-between">
        <Box className={classes.box}>
        <Text>Name:Raghupremachar</Text>
        <Text>USN:3VC21CS137</Text>
        <Text>Email:raghuprem23@gmail.com</Text>
        <Text>Branch:CSE</Text>
        </Box>
        <Avatar src="src\assets\profile.jpg" alt="it's me" size={150}/>
      </Group>
    <Grid>
      <Grid.Col span={{ base: 12, md: 8, lg: 6 }}> <Card className={classes.card}>
        <Title order={3} ta="center" mb="md">Academics</Title>
        <Table.ScrollContainer minWidth={200} p="lg">
        <Table data={academics} p="100px" />
      </Table.ScrollContainer>
      </Card></Grid.Col>
      <Grid.Col span={{ base: 12, md: 8, lg: 6 }}>
        <Card className={classes.card}>
      <Title order={3} ta="center" mb="md">Acheviments</Title>
      <Table.ScrollContainer minWidth={200} p="lg">
      <Table data={acheviments} p="100px"/>
      </Table.ScrollContainer>
      </Card>
      </Grid.Col>
     
    </Grid>
     
     
      </AppShell.Main>
    </AppShell>
  );
}