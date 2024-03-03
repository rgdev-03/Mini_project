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
  TextInput,
  Grid,
  Modal,
  NativeSelect,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './student.module.css';
import { Form, Link } from 'react-router-dom';
import { IconDownload } from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import { getStdID } from '@/utils/fetchStdID';

export function StuAcademics() {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);

  const [showSuccess, setShowSuccess] = useState(false);
  const [redirectUrl, setRedirectUrl] = useState('');

  const [academic_sem, setAcademicSem] = useState([]);
  const [academic_sgpa, setAcademicSgpa] = useState([]);


  const [academicData, setAcademicData] = useState([]);

  const stdId = getStdID();
  console.log(stdId);

  const handleAddAcademics = async () => {
    try {
      const academicData = {
        std_id:stdId,
        acad_sem: academic_sem,
        acad_sgpa: academic_sgpa,
     
      };

      console.log('Data being sent:', academicData);

      const response = await fetch('http://127.0.0.1:8000/api/academic_per/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(academicData),
      });

      if (response.ok) {
        setRedirectUrl('/stuacademics');
        setShowSuccess(true);
        console.log('academics added successfully');
      } else {
        console.error('Failed to add academics:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);

      if (error instanceof Error) {
        console.error('Error message:', error.message);
      }
    }
  };



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


  const handleModalClose = () => {
    setShowSuccess(false);

    if (redirectUrl) {
      window.location.href = redirectUrl;
    }
  };

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
          <Card className={classes.card}>
            <Title order={3} ta="center">
              Student Academic details
            </Title>
            <Grid>
              <Grid.Col span={4}>
                <TextInput
                  placeholder="Enter the sem"
                  m="lg"
                  value={academic_sem}
                  onChange={(event) => setAcademicSem(event.target.value)}
                />
              </Grid.Col>
              <Grid.Col span={4}>
                <TextInput
                  placeholder="Enter the SGPA"
                  m="lg"
                  value={academic_sgpa}
                  onChange={(event) => setAcademicSgpa(event.target.value)}
                />
              </Grid.Col>
      
            </Grid>

            <Group justify="center" mt="md">
              <Button
                bg="transparent"
                style={{ border: '2px solid #F8B179' }}
                onClick={handleAddAcademics}
              >
                Add Marks
              </Button>
            </Group>
          </Card>
        </Group>

        <Table mt="xl" horizontalSpacing="70px">
          <Table.Thead>
            <Table.Tr>
              <Table.Th ta="center">Semester</Table.Th>
              <Table.Th ta="center">SGPA</Table.Th>
             
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody ta="center">{rows}</Table.Tbody>
        </Table>

        <Modal title="Success" opened={showSuccess} onClose={handleModalClose} withCloseButton>
          Data added successfully!
        </Modal>
      </AppShell.Main>
    </AppShell>
  );
}
