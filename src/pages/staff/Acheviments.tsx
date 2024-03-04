import { NavBar } from '@/components/stunav/Navbar';
import { AppShell, Card, Grid, GridCol } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { NativeSelect } from '@mantine/core';
import { Button, Table, Group, Burger, Title, TextInput } from '@mantine/core';
import classes from '../Student/student.module.css';
import { StaffNavBar } from '@/components/staffnav/staffnav';
import { useEffect, useState } from 'react';
const elements = [
  { position: 6, name: 'Carbon', mass: 'bbhbs' },
  { position: 7, name: 'Nitrogen', mass: 'sccscs' },
  { position: 39, name: 'Yatrium', mass: 'bbjbjd' },
  { position: 56, name: 'Barium', mass: 'gyggdwd' },
  { position: 58, name: 'Cerium', mass: 'hbhehdb' },
  { position: 58, name: 'Cerium', mass: 'hbhehdb' },
  { position: 58, name: 'Cerium', mass: 'hbhehdb' },
  { position: 58, name: 'Cerium', mass: 'hbhehdb' },
  { position: 58, name: 'Cerium', mass: 'hbhehdb' },
  { position: 58, name: 'Cerium', mass: 'hbhehdb' },
  { position: 58, name: 'Cerium', mass: 'hbhehdb' },
];

const rows = elements.map((element) => (
  <Table.Tr key={element.name}>
    <Table.Td>{element.position}</Table.Td>
    <Table.Td>{element.name}</Table.Td>
    <Table.Td>{element.mass}</Table.Td>
  </Table.Tr>
));

export function Achievements() {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);

  const [certData, setCertData] = useState([]);



  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = `http://127.0.0.1:8000/api/stdcert/`;

        const response = await fetch(apiUrl);
        const data = await response.json();
        setCertData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); 

  const rows = Array.isArray(certData) ? certData.map((element) => (
    <Table.Tr key={element.std_id}>
      <Table.Td>{element.std_id}</Table.Td>

      <Table.Td>{element.certification_name}</Table.Td>
      <Table.Td>{element.org}</Table.Td>
      <Table.Td>{element.certi_e_date}</Table.Td>
    </Table.Tr>
  )) : null;
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
          {/* <Grid.Col span={4}>
            <NativeSelect
              variant="filled"
              size="lg"
              w="300px"
              radius="lg"
              label="Achivements:"
              ml={20}
              data={[]}
            />
          </Grid.Col>

          <Grid.Col span={4}>
            <NativeSelect
              variant="filled"
              size="lg"
              w="300px"
              radius="lg"
              label="Achievement-type:"
              ml={20}
              data={['Branch', 'Angular', 'Vue']}
            />
          </Grid.Col> */}
        </Grid>
        {/* <Group justify="right">
          <Button variant="filled" color="blue" size="lg" radius="lg" mt={100}>
            Export
          </Button>
        </Group> */}
        <Card className={classes.card} mt="lg">
          <Table horizontalSpacing="70px">
            {' '}
            <Table.Thead>
              <Table.Tr>
                <Table.Th>Student Name</Table.Th>

                <Table.Th>Certificate</Table.Th>
                <Table.Th>Organization</Table.Th>
                <Table.Th>Issued Date</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{rows}</Table.Tbody>
          </Table>
        </Card>
      </AppShell.Main>
    </AppShell>
  );
}
