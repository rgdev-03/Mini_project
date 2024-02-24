
import { NavBar } from '@/components/stunav/Navbar';

import { AppShell, Grid} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { NativeSelect } from '@mantine/core';
import { Button ,Table,Group,Burger,Title} from '@mantine/core';
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
];

const rows = elements.map((element) => (
  <Table.Tr key={element.name}>
    <Table.Td>{element.position}</Table.Td>
    <Table.Td>{element.name}</Table.Td>
    <Table.Td>{element.mass}</Table.Td>
  </Table.Tr>
));


export function Academics() {
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
      <NativeSelect variant="filled" size="lg" w="300px" radius="lg" mt="40px" label="Sem:" ml={20} data={['Sem', 'Angular', 'Vue']}/>       
      </Grid.Col>

      <Grid.Col span={4}>
      <NativeSelect variant="filled" size="lg" w="300px" radius="lg" mt="40px" label="Branch:" ml={20} data={['Branch', 'Angular', 'Vue']}/>       
      </Grid.Col>

      <Grid.Col span={3}>
      <NativeSelect variant="filled" size="lg" w="300px" radius="lg" mt="40px" label="Batch:" ml={20} data={['Batch', 'Angular', 'Vue']}/>       
      </Grid.Col>

      <Grid.Col span={4}>
      <NativeSelect variant="filled" size="lg" w="300px" radius="lg" mt="20px" label="From:" ml={20} data={['From', 'Angular', 'Vue']}/>       
      </Grid.Col>

      <Grid.Col span={4}>
      <NativeSelect variant="filled" size="lg" w="300px" radius="lg" mt="20px" label="To:" ml={20} data={['To', 'Angular', 'Vue']}/>       
      </Grid.Col>

      <Grid.Col span={3}>
      <Button variant="filled" color="blue" size="lg" radius="lg"  ml={210} mt={100}>Export</Button>
      </Grid.Col>
    </Grid>
    <Table ml="5px" mt="30px" borderColor='white'  withTableBorder withRowBorders={false}>
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