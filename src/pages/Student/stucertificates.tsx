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
  Button,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './student.module.css';
import { Link } from 'react-router-dom';
import { IconDownload } from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import { getStdID } from '@/utils/fetchStdID';
// const elements = [
//   { Name: 'Java', Organization: 'channel-btech', IssuedDate: '01-03-2023', Download: 'Carbon' },
//   { Name: 'Java', Organization: 'channel-btech', IssuedDate: '01-03-2023', Download: 'Carbon' },
//   { Name: 'Java', Organization: 'channel-btech', IssuedDate: '01-03-2023', Download: 'Carbon' },
//   { Name: 'Java', Organization: 'channel-btech', IssuedDate: '01-03-2023', Download: 'Carbon' },
//   { Name: 'Java', Organization: 'channel-btech', IssuedDate: '01-03-2023', Download: 'Carbon' },
//   { Name: 'Java', Organization: 'channel-btech', IssuedDate: '01-03-2023', Download: 'Carbon' },
// ];
export function StudentCertificates() {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);

  const [certData, setCertData] = useState([]);

  const stdId = getStdID();
  console.log(stdId);

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

  const rows = Array.isArray(certData) ? certData.map((element) => (
    <Table.Tr key={element.std_id}>
      <Table.Td>{element.certification_name}</Table.Td>
      <Table.Td>{element.org}</Table.Td>
      <Table.Td>{element.certi_e_date}</Table.Td>
      <Table.Td>{element.specification}</Table.Td>

    </Table.Tr>
  )) : null;

  // const rows = elements.map((element) => (
  //   <Table.Tr key={element.Name}>
  //     <Table.Td>{element.Name}</Table.Td>

  //     <Table.Td>{element.Organization}</Table.Td>
  //     <Table.Td>{element.IssuedDate}</Table.Td>
  //     <Table.Td>
  //       <Link to="#">
  //         <IconDownload />
  //       </Link>
  //     </Table.Td>
  //   </Table.Tr>
  
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
        <Group justify="right" mt="md">
          <Link to="/addcertificates">
            <Button bg="transparent" style={{ border: '2px solid #F8B179' }}>
              Add Certificates
            </Button>
          </Link>
        </Group>
        <Table mt="xl" horizontalSpacing="70px">
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Certificate Name</Table.Th>
              <Table.Th>Organization Name</Table.Th>
              <Table.Th>Issued Date</Table.Th>
              <Table.Th>Specification </Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      </AppShell.Main>
    </AppShell>
  );
}
