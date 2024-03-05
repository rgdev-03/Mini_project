import React, { useEffect, useState } from 'react';
import { AppShell, Card, Group, Table, Title, Burger, Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { StaffNavBar } from '@/components/staffnav/staffnav';
import classes from '../Student/student.module.css';
import * as XLSX from 'xlsx';

export function Staff() {
  const [staffdata, setStaffData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/staff/');
        const data = await response.json();
        setStaffData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const exportToExcel = () => {
    const ws = XLSX.utils.json_to_sheet(staffdata);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Staff Data');
    XLSX.writeFile(wb, 'staff_data.xlsx');
  };

  const rows = staffdata.map((element) => (
    <Table.Tr key={element.staff_id}>
      <Table.Td>{element.name}</Table.Td>
      <Table.Td>{element.branch}</Table.Td>
      <Table.Td>{element.mobile}</Table.Td>
      <Table.Td>{element.staff_type}</Table.Td>
      <Table.Td>{element.email}</Table.Td>
    </Table.Tr>
  ));

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
        <Group justify='right'>
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
                <Table.Th>Staff name</Table.Th>
                <Table.Th>Branch</Table.Th>
                <Table.Th>Mobile</Table.Th>
                <Table.Th>Staff type</Table.Th>
                <Table.Th>Email</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{rows}</Table.Tbody>
          </Table>
        </Card>
      </AppShell.Main>
    </AppShell>
  );
}
