import React, { useEffect, useState } from 'react';
import { NavBar } from '@/components/stunav/Navbar';
import { AppShell, Card, Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Grid } from '@mantine/core';
import { Button, Title, Burger } from '@mantine/core';
import { Table } from '@mantine/core';
import { Link } from 'react-router-dom';
import classes from '../Student/student.module.css';
import { StaffNavBar } from '@/components/staffnav/staffnav';

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
        <Card className={classes.card} mt="lg">
          <Table horizontalSpacing="70px">
            <Table.Thead>
              <Table.Tr>
                <Table.Th>Staff name</Table.Th>
                <Table.Th>Branch</Table.Th>
                <Table.Th>mobile</Table.Th>
                <Table.Th>staff_type</Table.Th>
                <Table.Th>email</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{rows}</Table.Tbody>
          </Table>
        </Card>
      </AppShell.Main>
    </AppShell>
  );
}
