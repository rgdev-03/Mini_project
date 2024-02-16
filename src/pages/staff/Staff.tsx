
import { Navbar, } from '@/components/Navbar/Navbar';
import { AppShell, Group} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Grid,} from '@mantine/core';
import { Button } from '@mantine/core';
import { Table } from '@mantine/core';
import { Link } from 'react-router-dom';

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
  ];

const rows = elements.map((element) => (
    <Table.Tr key={element.name}>
      <Table.Td>{element.position}</Table.Td>
      <Table.Td>{element.name}</Table.Td>
      <Table.Td>{element.mass}</Table.Td>
    </Table.Tr>
  ));

export function Staff() {
  const [opened] = useDisclosure();
 
  return (
    <AppShell
      navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
      padding="md"
    >
      
      <AppShell.Navbar >
        <Navbar/>
      </AppShell.Navbar>

      <AppShell.Main>
            <Grid>
            <Group mt={60} ml={1000}>
            <Link to="/staffadd">
            <Button variant="filled" color="rgba(176, 176, 176, 0.75)" size="md" radius="md"  c="Black">+ Add Staff</Button>
            </Link>
            </Group>
             </Grid>

      <Table ml="10px" mt="100px"  withTableBorder withRowBorders={false}>
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