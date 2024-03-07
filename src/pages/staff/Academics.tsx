import { NavBar } from '@/components/stunav/Navbar';
import { AppShell, Grid, TextInput } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { NativeSelect, Card } from '@mantine/core';
import { Button, Table, Group, Burger, Title } from '@mantine/core';
import { StaffNavBar } from '@/components/staffnav/staffnav';
import classes from '../Student/student.module.css';
import { useEffect, useState } from 'react';
import * as XLSX from 'xlsx';


export function Academics() {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);

  const [selectedBatch, setSelectedBatch] = useState('');
  const [selectedBranch, setSelectedBranch] = useState('');
  const [selectedSem, setSelectedSem] = useState('');
  const [sgpa, setSgpa] = useState('');



  const [academicData, setAcademicData] = useState([]);
  const [students, setStudents] = useState('');

  const [branches, setBranches] = useState('');
  const [batches, setBatches] = useState('');

  useEffect(() => {
    // Fetch the list of areas from the specified endpoint
    const fetchBranches = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/branch/');
        const data = await response.json();
        setBranches(data);
      } catch (error) {
        console.error('Error fetching Branches:', error);
      }
    };

    fetchBranches();
  }, []);

  useEffect(() => {
    // Fetch the list of areas from the specified endpoint
    const fetchBatches = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/batch/');
        const data = await response.json();
        setBatches(data);
      } catch (error) {
        console.error('Error fetching Batches:', error);
      }
    };

    fetchBatches();
  }, []);



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
        const apiUrl = `http://localhost:8000/api/stdacadsgpa/?batch=${selectedBatch}&branch=${selectedBranch}&acad_sem=${selectedSem}&acad_sgpa=${sgpa}        `;

        const response = await fetch(apiUrl);
        const data = await response.json();
        setAcademicData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [selectedBatch,selectedBranch,selectedSem,sgpa]);

  const exportToExcel = () => {
    // Transform academicData to include student names instead of std_id
    const dataWithNames = academicData.map(item => {
      const studentName = students.find(student => student.std_id === item.std_id)?.name || 'Unknown';
      return {
        ...item,
        stdName: studentName, // Add a new property for the student's name
        std_id: undefined // This will remove std_id property from the output
      };
    });
  
    // Remove undefined properties from the objects
    const cleanData = dataWithNames.map(item => {
      const obj = { ...item };
      Object.keys(obj).forEach(key => obj[key] === undefined && delete obj[key]);
      return obj;
    });
  
    const ws = XLSX.utils.json_to_sheet(cleanData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Academics Data');
    XLSX.writeFile(wb, 'academics_data.xlsx');
  };
  
  

  const rows = Array.isArray(academicData) ? academicData.map((element) => {
    const stdName =
    students.find((std) => std.std_id === element.std_id)?.name || '';
    return(
    <Table.Tr key={element.id}>
      <Table.Td>{stdName}</Table.Td>

      <Table.Td>{element.acad_sem}</Table.Td>
      <Table.Td>{element.acad_sgpa}</Table.Td>   
    </Table.Tr>
    );
}): null;


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
              label="Batch:"
              ml={20}
              value={selectedBatch}
              onChange={(event) => {
                const selectedValue = event.target.value;
                console.log('Selected Batch:', selectedValue);
                setSelectedBatch(selectedValue ? parseInt(selectedValue, 10) : null);
              }}
              data={[
                { label: 'Select the Batch', value: null }, // Initial option
                ...(batches &&
                  batches.map((s) => ({ label: `${s.batch_code}`, value: `${s.id}` }))),
              ]}
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
              value={selectedBranch}
              onChange={(event) => {
                const selectedValue = event.target.value;
                console.log('Selected Branch:', selectedValue);
                setSelectedBranch(selectedValue ? parseInt(selectedValue, 10) : null);
              }}
              data={[
                { label: 'Select the Branch', value: null }, // Initial option
                ...(branches &&
                  branches.map((s) => ({ label: `${s.branch_name}`, value: `${s.id}` }))),
              ]}
            />
          </Grid.Col>

          <Grid.Col span={4}>
            <NativeSelect
              variant="filled"
              size="lg"
              w="300px"
              radius="lg"
              mt="40px"
              label="Sem:"
              ml={20}
              value={selectedSem}
              onChange={(event) => {
                const selectedValue = event.target.value;
                console.log('Selected Student Sem:', selectedValue);
                setSelectedSem(selectedValue);
              }}
              data={[
                { label: 'Select Sem', value: '' },
                { label: '1', value: '1' },
                { label: '2', value: '2' },
                { label: '3', value: '3' },
                { label: '4', value: '4' },
                { label: '5', value: '5' },
                { label: '6', value: '6' },
                { label: '7', value: '7' },
                { label: '8', value: '8' },
              ]}
            />
          </Grid.Col>

          <Grid.Col span={3}>
              <TextInput
                variant="filled"
                size="md"
                radius="lg"
                label="SGPA:"
                placeholder=""
                value={sgpa}
                onChange={(event) => setSgpa(event.target.value)}
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
        </Group>
        <Card className={classes.card} mt="lg">
          <Table horizontalSpacing="70px">
            <Table.Thead>
              <Table.Tr>
                <Table.Th>Student</Table.Th>
                <Table.Th>SEM</Table.Th>
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
