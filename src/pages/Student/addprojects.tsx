import { NavBar } from '@/components/NavBar/NavBar';
import { AppShell, Burger, Group, Skeleton, Title,Text, Box,Avatar,Card,Table, TableData, Button,Center,TextInput,Container} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './student.module.css'
import { Form } from 'react-router-dom';

export function AddProjects() {
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
      <AppShell.Main>
      <Group justify="center" mt={100}>
        <Card  w={500} className={classes.card}>
            <Title order={3} ta="center">Add Projects</Title>
            <Form action="/stucertificates"style={{padding:"20px"}}>
                <TextInput
                label='Project-Name'
                required
                >
                </TextInput>
                <TextInput
                label='Project-Type'
                required
                mt="lg">
                </TextInput>
               
                <TextInput
                label='Git-Repo-Link'
                required
                type="text"
                mt="lg">
                </TextInput>
                <Group justify="center">
                <Button bg="transparent" style={{border:"2px solid #F8B179", width:"100%"}} mt="lg" >Add Projects</Button>
                </Group>
            </Form>
        </Card>
        </Group>
      </AppShell.Main>
    </AppShell>
  );
}