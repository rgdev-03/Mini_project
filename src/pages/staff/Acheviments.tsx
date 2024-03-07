import { NavBar } from '@/components/stunav/Navbar';
import { AppShell, Card, Grid, GridCol } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { NativeSelect } from '@mantine/core';
import { Button, Table, Group, Burger, Title, TextInput } from '@mantine/core';
import classes from '../Student/student.module.css';
import { StaffNavBar } from '@/components/staffnav/staffnav';
import { useEffect, useState } from 'react';

import * as XLSX from 'xlsx';

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

  const [students, setStudents] = useState('');
  const [spec, setSpec] = useState('');


  useEffect(() => {
    // Fetch the list of areas from the specified endpoint
    const fetchStudent = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/student/');
        const data = await response.json();
        setStudents(data);
      } catch (error) {
        console.error('Error fetching Batches:', error);
      }
    };

    fetchStudent();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = `http://localhost:8000/api/stdcertspec/?specification=${spec}`;

        const response = await fetch(apiUrl);
        const data = await response.json();
        setCertData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [spec]);

  const exportToExcel = () => {
    // Transform academicData to include student names instead of std_id
    const dataWithNames = certData.map((item) => {
      const studentName =
        students.find((student) => student.std_id === item.std_id)?.name || 'Unknown';
      return {
        ...item,
        stdName: studentName, // Add a new property for the student's name
        std_id: undefined, // This will remove std_id property from the output
      };
    });

    // Remove undefined properties from the objects
    const cleanData = dataWithNames.map((item) => {
      const obj = { ...item };
      Object.keys(obj).forEach((key) => obj[key] === undefined && delete obj[key]);
      return obj;
    });

    const ws = XLSX.utils.json_to_sheet(cleanData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'skills Data');
    XLSX.writeFile(wb, 'skills_data.xlsx');
  };

  const rows = Array.isArray(certData)
    ? certData.map((element) => {
        const stdName = students.find((std) => std.std_id === element.std_id)?.name || '';
        return (
          <Table.Tr key={element.std_id}>
            <Table.Td>{stdName}</Table.Td>

            <Table.Td>{element.certification_name}</Table.Td>
            <Table.Td>{element.org}</Table.Td>
            <Table.Td>{element.certi_e_date}</Table.Td>

            <Table.Td>{element.specification}</Table.Td>
          </Table.Tr>
        );
      })
    : null;
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
            <TextInput
              variant="filled"
              size="lg"
              w="300px"
              radius="lg"
              mt="40px"
              label="Specification:"
              ml={20}
              value={spec}
              onChange={(event) => setSpec(event.target.value)}

              
            />
          </Grid.Col>
    
        </Grid>
        <Group justify="right">
          <Button
            mt="xl"
            bg="transparent"
            style={{ border: '2px solid #F8B179' }}
            onClick={exportToExcel}
            mt="sm"
          >
            Export
          </Button>
        </Group>{' '}
        <Card className={classes.card} mt="lg">
          <Table horizontalSpacing="70px">
            {' '}
            <Table.Thead>
              <Table.Tr>
                <Table.Th>Student Name</Table.Th>

                <Table.Th>Certificate</Table.Th>
                <Table.Th>Organization</Table.Th>
                <Table.Th>Issued Date</Table.Th>

                <Table.Th>Specification</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{rows}</Table.Tbody>
          </Table>
        </Card>
      </AppShell.Main>
    </AppShell>
  );
}
