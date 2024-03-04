import { NavBar } from '@/components/stunav/Navbar';
import { AppShell, Grid } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { NativeSelect, Card } from '@mantine/core';
import { Button, Table, Group, Burger, Title } from '@mantine/core';
import { StaffNavBar } from '@/components/staffnav/staffnav';
import classes from '../Student/student.module.css';
import { useEffect, useState } from 'react';


export function Academics() {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);

  const [academicData, setAcademicData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = `http://127.0.0.1:8000/api/stdacd/`;

        const response = await fetch(apiUrl);
        const data = await response.json();
        setAcademicData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const rows = Array.isArray(academicData) ? academicData.map((element) => (
    <Table.Tr key={element.id}>
      <Table.Td>{element.std_id}</Table.Td>

      <Table.Td>{element.acad_sem}</Table.Td>
      <Table.Td>{element.acad_sgpa}</Table.Td>   
    </Table.Tr>
  )): null;


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
              label="Branch:"
              ml={20}
              data={['Branch', 'Angular', 'Vue']}
            />
          </Grid.Col>

          <Grid.Col span={3}>
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

          <Grid.Col span={4}>
            <NativeSelect
              variant="filled"
              size="lg"
              w="300px"
              radius="lg"
              mt="20px"
              label="From:"
              ml={20}
              data={['From', 'Angular', 'Vue']}
            />
          </Grid.Col>

          <Grid.Col span={4}>
            <NativeSelect
              variant="filled"
              size="lg"
              w="300px"
              radius="lg"
              mt="20px"
              label="To:"
              ml={20}
              data={['To', 'Angular', 'Vue']}
            />
          </Grid.Col>

          <Grid.Col span={3}>
            <Button variant="filled" color="blue" size="lg" radius="lg" ml={210} mt={100}>
              Export
            </Button>
          </Grid.Col>
        </Grid>
        <Card className={classes.card} mt="lg">
          <Table horizontalSpacing="70px">
            <Table.Thead>
              <Table.Tr>
                <Table.Th>Student</Table.Th>
                <Table.Th>SEN</Table.Th>
                <Table.Th>SGPA</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{rows}</Table.Tbody>
          </Table>
        </Card>
      </AppShell.Main>
    </AppShell>
  );
}
