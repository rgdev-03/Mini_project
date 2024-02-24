
import { NavBar } from '@/components/staffnav/Navbar';
import { AppShell, Group} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Grid,} from '@mantine/core';
import { Button,Title,Burger } from '@mantine/core';
import { Table } from '@mantine/core';
import { Link } from 'react-router-dom';
import classes from './staff.module.css';
const elements = [
    { position: 6, name: 'Carbon', mass:'bbhbs'},
    { position: 7,  name: 'Nitrogen',mass:'sccscs'},
    { position: 39, name: 'Yatrium',mass:'bbjbjd' },
    { position: 56,  name: 'Barium',mass:'gyggdwd' },
    { position: 58,  name: 'Cerium',mass:'hbhehdb' },
    { position: 58,  name: 'Cerium',mass:'hbhehdb' },
    { position: 58,  name: 'Cerium',mass:'hbhehdb' },
    { position: 58,  name: 'Cerium',mass:'hbhehdb' },
    { position: 58,  name: 'Cerium',mass:'hbhehdb' },
    { position: 58,  name: 'Cerium',mass:'hbhehdb' },
    { position: 58,  name: 'Cerium',mass:'hbhehdb' },
    { position: 58,  name: 'Cerium',mass:'hbhehdb' },
    { position: 58,  name: 'Cerium',mass:'hbhehdb' },
    { position: 58,  name: 'Cerium',mass:'hbhehdb' },
  ];

const rows = elements.map((element) => (
    <Table.Tr key={element.name}>
      <Table.Td>{element.position}</Table.Td>
      <Table.Td>{element.name}</Table.Td>
      <Table.Td>{element.mass}</Table.Td>
    </Table.Tr>
  ));

export function Staff() {
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
            <Group mt={60} ml={1000}>
            <Link to="/staffadd">
            <Button variant="filled" color="blue" size="lg" radius="lg">+ Add Staff</Button>
            </Link>
            </Group>
             </Grid>

      <Table ml="5px" mt="100px" borderColor='white' withTableBorder withRowBorders={false}>
      <Table.Thead>
        <Table.Tr >
          <Table.Th>Staff id</Table.Th>
          <Table.Th>Staff name</Table.Th>
          <Table.Th>Branch</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
      </AppShell.Main>
    </AppShell>
  );
}