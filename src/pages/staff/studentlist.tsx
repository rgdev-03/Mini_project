import { NavBar } from '@/components/stunav/Navbar';
import { AppShell, Grid } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { NativeSelect } from '@mantine/core';
import { Button, Group, Burger, Title, Card } from '@mantine/core';
import { Table } from '@mantine/core';
import classes from '../Student/student.module.css';
import { StaffNavBar } from '@/components/staffnav/staffnav';
import { useEffect, useState } from 'react';
import * as XLSX from 'xlsx';

export function Students() {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);

  const [selectedBatch, setSelectedBatch] = useState('');
  const [selectedSem, setSelectedSem] = useState('');
  const [selectedBranch, setSelectedBranch] = useState('');

  const [branches, setBranches] = useState('');
  const [batches, setBatches] = useState('');

  const [studData, setStudData] = useState([]);

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

  const exportToExcel = () => {
    // Transform studData to include batch and branch names
    const dataWithNames = studData.map(item => {
      const batchName = batches.find(batch => batch.id === item.batch)?.batch_code || 'Unknown Batch';
      const branchName = branches.find(branch => branch.id === item.branch)?.branch_name || 'Unknown Branch';
  
      return {
        ...item,
        batch: batchName, // Replace batch ID with batch name
        branch: branchName, // Replace branch ID with branch name
      };
    });
  
    const ws = XLSX.utils.json_to_sheet(dataWithNames);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Student Data');
    XLSX.writeFile(wb, 'student_data.xlsx');
  };
  

  const fetchData = async () => {
    try {
      // Construct the API URL with selected filter options
      const apiUrl = `http://localhost:8000/api/stddata/?batch=${selectedBatch}&branch=${selectedBranch}&sem=${selectedSem}`;
      const response = await fetch(apiUrl);
      const data = await response.json();
      setStudData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [selectedBatch, selectedSem, selectedBranch]); // Update data when filter options change

  const rows = studData.map((element) => {
    // Find the branch name corresponding to the branch ID
    const branchName = branches.find((branch) => branch.branch === element.id)?.branch_name || '';

    // Find the branch name corresponding to the branch ID
    const batchName = batches.find((batch) => batch.batch === element.id)?.batch_code || '';

    return (
      <Table.Tr key={element.std_id}>
        <Table.Td>{element.name}</Table.Td>
        <Table.Td>{element.sem}</Table.Td>
        <Table.Td>{batchName}</Table.Td>
        <Table.Td>{branchName}</Table.Td> {/* Display branch name instead of ID */}
      </Table.Tr>
    );
  });

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

          <Grid.Col span={3}>
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

          {/* <Grid.Col span={3}>
            <Button variant="filled" color="blue" size="lg" radius="lg" ml={1030} mt={20}>
              Export
            </Button>
          </Grid.Col> */}
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
