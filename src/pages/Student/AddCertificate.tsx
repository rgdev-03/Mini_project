import { NavBar } from '@/components/Navbar/Navbar';
import { AppShell, Burger, Group, Skeleton, Title,Text, Box,Avatar,Card,Table, TableData, Button,Center,TextInput,Container} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './student.module.css'
import { Form } from 'react-router-dom';

export function AddCertificates() {
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
            <Title order={3} ta="center">ADD CERTIFICATES</Title>
            <Form action="/stucertificates"style={{padding:"20px"}}>
                <TextInput
                label='Certificate-Name'
                required
                >
                </TextInput>
                <TextInput
                label='Organization-Name'
                required
                mt="lg">
                </TextInput>
                <TextInput
                label='Issued-Date'
                required
                type="date"
                mt="lg">
                </TextInput>
                <TextInput
                label='Add File'
                required
                type="file"
                mt="lg">
                </TextInput>
                <Group justify="center">
                <Button type="submit" justify="center" w="100%" mt="xl">ADD CERTIFICATES</Button>
                </Group>
            </Form>
        </Card>
        </Group>
      </AppShell.Main>
    </AppShell>
  );
}