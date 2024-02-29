import { NavBar } from '@/components/stunav/Navbar';
import { AppShell, Grid } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { NativeSelect } from '@mantine/core';
import { Button, Group, Burger, Title, Card } from '@mantine/core';
import { Table } from '@mantine/core';
import classes from '../Student/student.module.css';
import { StaffNavBar } from '@/components/staffnav/staffnav';
const elements = [
  { studentName: 'raghu', position: 6, name: 'Carbon', mass: 'bbhbs' },
  { studentName: 'raghu', position: 6, name: 'Carbon', mass: 'bbhbs' },
  { studentName: 'raghu', position: 6, name: 'Carbon', mass: 'bbhbs' },
  { studentName: 'raghu', position: 6, name: 'Carbon', mass: 'bbhbs' },
  { studentName: 'raghu', position: 6, name: 'Carbon', mass: 'bbhbs' },
  { studentName: 'raghu', position: 6, name: 'Carbon', mass: 'bbhbs' },
  { studentName: 'raghu', position: 6, name: 'Carbon', mass: 'bbhbs' },
  { studentName: 'raghu', position: 6, name: 'Carbon', mass: 'bbhbs' },
  { studentName: 'raghu', position: 6, name: 'Carbon', mass: 'bbhbs' },
  { studentName: 'raghu', position: 6, name: 'Carbon', mass: 'bbhbs' },
];

const rows = elements.map((element) => (
  <Table.Tr key={element.name}>
    <Table.Td>{element.studentName}</Table.Td>
    <Table.Td>{element.position}</Table.Td>
    <Table.Td>{element.name}</Table.Td>
    <Table.Td>{element.mass}</Table.Td>
  </Table.Tr>
));

export function Students() {
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
            <NativeSelect
              variant="filled"
              size="lg"
              w="300px"
              radius="lg"
              mt="40px"
              label="Sem:"
              ml={20}
              data={['Sem', 'Angular', 'Vue']}
            />
          </Grid.Col>

          <Grid.Col span={4}>
            <NativeSelect
              variant="filled"
              size="lg"
              w="300px"
              radius="lg"
              mt="40px"
              label="Batch:"
              ml={20}
              data={['Batch', 'Angular', 'Vue']}
            />
          </Grid.Col>

          <Grid.Col span={3}>
            <NativeSelect
              variant="filled"
              size="lg"
              w="300px"
              radius="lg"
              mt="40px"
              label="Branch:"
              ml={20}
              data={['Branch', 'Angular', 'Vue']}
            />
          </Grid.Col>

          <Grid.Col span={3}>
            <Button variant="filled" color="blue" size="lg" radius="lg" ml={1030} mt={20}>
              Export
            </Button>
          </Grid.Col>
        </Grid>

        <Card className={classes.card} mt="lg">
          <Table horizontalSpacing="70px">
            {' '}
            <Table.Thead>
              <Table.Tr>
                <Table.Th>student Name</Table.Th>
                <Table.Th>Sem</Table.Th>
                <Table.Th>Batch</Table.Th>
                <Table.Th>Branch</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{rows}</Table.Tbody>
          </Table>
        </Card>
      </AppShell.Main>
    </AppShell>
  );
}
