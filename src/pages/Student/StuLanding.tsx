import { NavBar } from '@/components/stunav/Navbar';
import {
  AppShell,
  Burger,
  Group,
  Skeleton,
  Title,
  Text,
  Box,
  Avatar,
  Card,
  Table,
  TableData,
  Grid,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './student.module.css';
import { getJwtPayload, getUserIdFromJwt } from '@/utils/fetchUser';
import { useEffect, useState } from 'react';
import { getStdID } from '@/utils/fetchStdID';
// import jwt from 'jsonwebtoken'; // Import jsonwebtoken library

const academics: TableData = {
  head: ['SEMESTER', 'SGPA'],
  body: [
    [1, 8.9],
    [1, 8.9],
    [1, 8.9],
    [1, 8.9],
    [1, 8.9],
    [1, 8.9],
    [1, 8.9],
    [1, 8.9],
    [1, 8.9],
  ],
};

const acheviments: TableData = {
  head: ['Certificate-Name', 'Organization', 'Issued-date'],
  body: [
    ['Java FullStack', 'Channel-Btech', '01-04-2023'],
    ['Java FullStack', 'Channel-Btech', '01-04-2023'],
    ['Java FullStack', 'Channel-Btech', '01-04-2023'],
    ['Java FullStack', 'Channel-Btech', '01-04-2023'],
    ['Java FullStack', 'Channel-Btech', '01-04-2023'],
  ],
};
export function StudentLanding() {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);

  const userId = getUserIdFromJwt();

  const [stdData, setStdData] = useState();
  const [academicData, setAcademicData] = useState([]);
  const [branches, setBranches] = useState('');

  useEffect(() => {
    // Fetch the list of areas from the specified endpoint
    const fetchBranches = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/branch/');
        const data = await response.json();
        setBranches(data);
      } catch (error) {
        console.error('Error fetching Department Data:', error);
      }
    };

    fetchBranches();
  }, []);



  // console.log(userId);
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Construct the API URL with selected filter options
        const apiUrl = `http://127.0.0.1:8000/api/stduser/?user=${userId}`;
        const response = await fetch(apiUrl);


        
        const data = await response.json();
        setStdData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [userId]); 

  console.log("StudentData",stdData);

  const studentData = stdData;



  const stdId = getStdID();




  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = `http://127.0.0.1:8000/api/stdacd/?std_id=${stdId}`;

        const response = await fetch(apiUrl);
        const data = await response.json();
        setAcademicData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [stdId]);

  const rows = Array.isArray(academicData) ? academicData.map((element) => (
    <Table.Tr key={element.id}>
      <Table.Td>{element.acad_sem}</Table.Td>
      <Table.Td>{element.acad_sgpa}</Table.Td>   
    </Table.Tr>
  )): null;


  // Certificates
  const [certData, setCertData] = useState([]);


  // console.log(stdId);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = `http://127.0.0.1:8000/api/stdcert/?std_id=${stdId}`;

        const response = await fetch(apiUrl);
        const data = await response.json();
        setCertData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [stdId]); 

  const cert = Array.isArray(certData) ? certData.map((element) => (
    <Table.Tr key={element.std_id}>
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
      <AppShell.Navbar style={{ border: 'none', backgroundColor: '#2D3250', width: '311px' }}>
        <NavBar />
      </AppShell.Navbar>
      <AppShell.Main c="white">
        <Group justify="center">
          <Title order={2}>
            Hello {studentData && studentData[0].name}
          </Title>
        </Group>
        <Group justify="space-between">
          <Box className={classes.box}>
            <Text>Name:     {studentData && studentData[0].name}</Text>
            <Text>USN:      {studentData && studentData[0].USN}</Text>
            <Text>Email:    {studentData && studentData[0].email}</Text>
            <Text>Branch:   {studentData && studentData[0].branch}</Text>
          </Box>
        </Group>
        <Grid>
          <Grid.Col span={{ base: 12, md: 8, lg: 6 }}>
            <Card className={classes.card}>
              <Title order={3} ta="center" mb="md">
                Academics
              </Title>
              <Table.ScrollContainer minWidth={200} p="lg">
                <Table >
                    <Table.Thead>
                      <Table.Tr>
                        <Table.Th ta="center">Semester</Table.Th>
                        <Table.Th ta="center">SGPA</Table.Th>
                      
                      </Table.Tr>
                  </Table.Thead>
                  <Table.Tbody ta="center">{rows}</Table.Tbody>
                </Table>
              </Table.ScrollContainer>
            </Card>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 8, lg: 6 }}>
            <Card className={classes.card}>
              <Title order={3} ta="center" mb="md">
                Acheviments
              </Title>
              <Table.ScrollContainer minWidth={200} p="lg">
                <Table  p="100px" >
                <Table.Thead>
            <Table.Tr>
              <Table.Th>Certificate Name</Table.Th>
              <Table.Th>Organization Name</Table.Th>
              <Table.Th>Issued Date</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{cert}</Table.Tbody>
                </Table>
              </Table.ScrollContainer>
            </Card>
          </Grid.Col>
        </Grid>
      </AppShell.Main>
    </AppShell>
  );
}