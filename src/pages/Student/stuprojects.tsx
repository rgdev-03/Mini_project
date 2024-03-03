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
const elements = [
  {
    ProjectName: 'PMS',
    ProjectType: 'MINI Project',
    GitRepo: 'https://github.com/rgdev-03/Mini_project',
  },
  {
    ProjectName: 'PMS',
    ProjectType: 'MINI Project',
    GitRepo: 'https://github.com/rgdev-03/Mini_project',
  },
  {
    ProjectName: 'PMS',
    ProjectType: 'MINI Project',
    GitRepo: 'https://github.com/rgdev-03/Mini_project',
  },
  {
    ProjectName: 'PMS',
    ProjectType: 'MINI Project',
    GitRepo: 'https://github.com/rgdev-03/Mini_project',
  },
  {
    ProjectName: 'PMS',
    ProjectType: 'MINI Project',
    GitRepo: 'https://github.com/rgdev-03/Mini_project',
  },
  {
    ProjectName: 'PMS',
    ProjectType: 'MINI Project',
    GitRepo: 'https://github.com/rgdev-03/Mini_project',
  },
  {
    ProjectName: 'PMS',
    ProjectType: 'MINI Project',
    GitRepo: 'https://github.com/rgdev-03/Mini_project',
  },
];
export function StuProjects() {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);


  const [projData, setprojData] = useState([]);

  const stdId = getStdID();
  console.log(stdId);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = `http://127.0.0.1:8000/api/stdproj/?std_id=${stdId}`;

        const response = await fetch(apiUrl);
        const data = await response.json();
        setprojData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [stdId]); 

  const rows = Array.isArray(projData) ? projData.map((element) => (
    <Table.Tr key={element.std_id}>
      <Table.Td>{element.project_name}</Table.Td>
      <Table.Td>{element.project_type}</Table.Td>
      <Table.Td>{element.project_repo_url}</Table.Td>
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
        <Group justify="right" mt="md">
          <Link to="/addprojects">
            <Button bg="transparent" style={{ border: '2px solid #F8B179' }}>
              Add Projects
            </Button>
          </Link>
        </Group>
        <Table mt="xl" horizontalSpacing="70px">
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Project-Name</Table.Th>
              <Table.Th>Project-Type</Table.Th>
              <Table.Th>GitRepo-Link</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      </AppShell.Main>
    </AppShell>
  );
}
