import { Header } from '@/components/Header/Header';
import { StaffNavBar } from '@/components/staffnav/staffnav';
import { AppShell, Burger, Group, Grid, Text, TextInput, Title, Modal, Card } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { NativeSelect } from '@mantine/core';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '@mantine/core';
import { Textarea, Button } from '@mantine/core';
import { YearPickerInput } from '@mantine/dates';
import '@mantine/dates/styles.css';
import classes from '../Student/student.module.css';

import { useEffect, useState } from 'react';
import { NavBar } from '@/components/stunav/Navbar';

export function Staffadd() {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);

  const [showSuccess, setShowSuccess] = useState(false);
  const [redirectUrl, setRedirectUrl] = useState('');
  const [staffname, setStaffName] = useState([]);
  const [staffbranch, setStaffBranch] = useState([]);
  const [staffmobile, setStaffMobile] = useState([]);
  const [stafftype, setStaffType] = useState([]);
  const [staffemail, setStaffEmail] = useState([]);

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

  const handleAddStaff = async () => {
    try {
      const staffData = {
        name: staffname,
        branch: staffbranch,
        mobile: staffmobile,
        staff_type: stafftype,
        email: staffemail,
      };

      console.log('Data being sent:', staffData);

      const response = await fetch('http://127.0.0.1:8000/api/staff/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(staffData),
      });

      if (response.ok) {
        setRedirectUrl('/staff');
        setShowSuccess(true);
        console.log('staff added successfully');
      } else {
        const errorMessage = await response.text(); // Extract error message from response
        throw new Error(errorMessage);
        console.error('Failed to add staff:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);

      if (error instanceof Error) {
        console.error('Error message:', error.message);
      }
    }
  };

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
      c="white"
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
        <Text>
          <h1>Add Staff</h1>
        </Text>
        <Card className={classes.card}>
          <Grid>
            <Grid.Col span={4}>
              <TextInput
                variant="filled"
                size="md"
                radius="lg"
                label="staff Name:"
                placeholder="staff Name"
                value={staffname}
                onChange={(event) => setStaffName(event.target.value)}
              />
            </Grid.Col>

            <Grid.Col span={4}>
              <NativeSelect
                variant="filled"
                size="md"
                label=" select branch"
                radius="lg"
                value={staffbranch}
                onChange={(event) => {
                  const selectedValue = event.target.value;
                  console.log('Selected Branch:', selectedValue);
                  setStaffBranch(selectedValue ? parseInt(selectedValue, 10) : null);
                }}
                data={[
                  { label: 'Select the Branch', value: null }, // Initial option
                  ...(branches && branches.map((us) => ({ label: us.branch_name, value: us.id }))),
                ]}
              />
            </Grid.Col>

           

            <Grid.Col span={4}>
              <TextInput
                variant="filled"
                size="md"
                radius="lg"
                label="staff Mobile_no:"
                placeholder="Enter the staff_mobile"
                value={staffmobile}
                onChange={(event) => setStaffMobile(event.target.value)}
              />
            </Grid.Col>

            <Grid.Col span={4}>
              <NativeSelect
                variant="filled"
                size="md"
                label="Select Section"
                radius="lg"
                value={stafftype}
                onChange={(event) => {
                  const selectedValue = event.target.value;
                  console.log('Selected staff_type:', selectedValue);
                  setStaffType(selectedValue);
                }}
                data={[
                  { label: 'Select staff_type', value: '' },
                  { label: 'Placement_co-ordinator', value: 'placement_co_ordinator' },
                  { label: 'Department_co_ordinator', value: 'Department_co_ordinator' },

                 
                ]}
              />
            </Grid.Col>

           

            <Grid.Col span={4}>
              <TextInput
                variant="filled"
                size="md"
                radius="lg"
                label="Staff Email"
                placeholder="Email"
                value={staffemail}
                onChange={(event) => setStaffEmail(event.target.value)}
              />
            </Grid.Col>

            
          </Grid>
        </Card>
        <Group mt={30} ml={20}>
          <Button
            variant="filled"
            color="rgba(176, 176, 176, 0.75)"
            size="md"
            radius="md"
            w={100}
            c="darkgreen"
            onClick={handleAddStaff}
          >
            Add
          </Button>
          <Button variant="filled" color="rgba(176, 176, 176, 0.75)" size="md" radius="md" c="red">
            Cancel
          </Button>
        </Group>
        <Modal title="Success" opened={showSuccess} onClose={handleModalClose} withCloseButton>
          Data added successfully!
        </Modal>
      </AppShell.Main>
    </AppShell>
  );
}
