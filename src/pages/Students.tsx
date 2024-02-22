import { Navbar } from '@/components/Navbar/Navbar';
import { AppShell, Grid} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { NativeSelect } from '@mantine/core';
import { Button } from '@mantine/core';
import { Table} from '@mantine/core';
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

export function Students() {
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
      <Grid.Col span={4}>
      <NativeSelect variant="filled" size="lg" w="300px" radius="lg" mt="40px" label="Name:" ml={20} data={['Sem', 'Angular', 'Vue']}/>       
      </Grid.Col>

      <Grid.Col span={4}>
      <NativeSelect variant="filled" size="lg" w="300px" radius="lg" mt="40px" label="Branch:" ml={20} data={['Batch', 'Angular', 'Vue']}/>       
      </Grid.Col>

      <Grid.Col span={3}>
      <NativeSelect variant="filled" size="lg" w="300px" radius="lg" mt="40px" label="Department:" ml={20} data={['Branch', 'Angular', 'Vue']}/>       
      </Grid.Col>

      <Grid.Col span={3}>
      <Button variant="filled" color="blue" size="lg" radius="lg"  ml={1030} mt={20}>Export</Button>
      </Grid.Col> 
            
    </Grid>
     
    <Table ml="5px" mt="50px" borderColor='black'  withTableBorder withRowBorders={false}>
      <Table.Thead>
        <Table.Tr >
          <Table.Th>Sem</Table.Th>
          <Table.Th>Batch</Table.Th>
          <Table.Th>Branch</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
      </AppShell.Main>
     
    </AppShell>
  );
}