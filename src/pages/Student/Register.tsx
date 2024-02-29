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

export function StudentRegister() {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);

  const [showSuccess, setShowSuccess] = useState(false);
  const [redirectUrl, setRedirectUrl] = useState('');
  const [stuname, setStuName] = useState([]);
  const [stuusn, setStuUsn] = useState([]);
  const [stubranch, setStuBranch] = useState([]);
  const [stusec, setStuSec] = useState([]);
  const [stusem, setStuSem] = useState([]);
  const [stubatch, setStuBatch] = useState([]);
  const [sturollno, setStuRollNumber] = useState([]);
  const [studob, setStuDob] = useState([]);
  const [stugender, setStuGender] = useState([]);
  const [stumobile, setStuMobile] = useState([]);

  const [branches, setBranches] = useState('');
  const [batches, setBatches] = useState('');

  useEffect(() => {
    // Fetch the list of areas from the specified endpoint
    const fetchBatches = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/batch/');
        const data = await response.json();
        setBatches(data);
      } catch (error) {
        console.error('Error fetching Department Data:', error);
      }
    };

    fetchBatches();
  }, []);

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

  const handleAddStu = async () => {
    try {
      const stuData = {
        name: stuname,
        USN: stuusn,
        branch: stubranch,
        sec: stusec,
        sem: stusem,
        batch: stubatch,
        roll_no: sturollno,
        dob: studob,
        gender: stugender,
        mobile: stumobile,
      };

      console.log('Data being sent:', stuData);

      const response = await fetch('http://127.0.0.1:8000/api/student/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(stuData),
      });

      if (response.ok) {
        setRedirectUrl('/studentregister');
        setShowSuccess(true);
        console.log('Student added successfully');
      } else {
        console.error('Failed to add Student:', response.status, response.statusText);
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
        <NavBar />
      </AppShell.Navbar>
      <AppShell.Main>
        <Text>
          <h1>Student details</h1>
        </Text>
        <Card className={classes.card}>
          <Grid>
            <Grid.Col span={4}>
              <TextInput
                variant="filled"
                size="md"
                radius="lg"
                label="Student Name:"
                placeholder="Student Name"
                value={stuname}
                onChange={(event) => setStuName(event.target.value)}
              />
            </Grid.Col>

            <Grid.Col span={4}>
              <TextInput
                variant="filled"
                size="md"
                radius="lg"
                label="USN:"
                placeholder="Enter USN"
                value={stuusn}
                onChange={(event) => setStuUsn(event.target.value)}
              />
            </Grid.Col>

            <Grid.Col span={4}>
              <NativeSelect
                variant="filled"
                size="md"
                label=" select branch"
                radius="lg"
                value={stubranch}
                onChange={(event) => {
                  const selectedValue = event.target.value;
                  console.log('Selected Branch:', selectedValue);
                  setStuBranch(selectedValue ? parseInt(selectedValue, 10) : null);
                }}
                data={[
                  { label: 'Select the Branch', value: null }, // Initial option
                  ...(branches && branches.map((us) => ({ label: us.branch_name, value: us.id }))),
                ]}
              />
            </Grid.Col>

            <Grid.Col span={4}>
              <NativeSelect
                variant="filled"
                size="md"
                label="Select Section"
                radius="lg"
                value={stusec}
                onChange={(event) => {
                  const selectedValue = event.target.value;
                  console.log('Selected Section:', selectedValue);
                  setStuSec(selectedValue);
                }}
                data={[
                  { label: 'Select Section', value: '' },
                  { label: 'Sec A', value: 'A' },
                  { label: 'Sec B', value: 'B' },
                  { label: 'Sec C', value: 'C' },
                  { label: 'Sec D', value: 'D' },
                  { label: 'Sec E', value: 'E' },
                ]}
              />
            </Grid.Col>

            <Grid.Col span={4}>
              <NativeSelect
                variant="filled"
                size="md"
                label="Select semester"
                radius="lg"
                value={stusem}
                onChange={(event) => {
                  const selectedValue = event.target.value;
                  console.log('Selected semester:', selectedValue);
                  setStuSem(selectedValue);
                }}
                data={[
                  { label: 'Select Semester', value: '' },
                  { label: 'sem 1', value: '1' },
                  { label: 'sem 2', value: '2' },
                  { label: 'sem 3', value: '3' },
                  { label: 'sem 4', value: '4' },
                  { label: 'sem 5', value: '5' },
                  { label: 'sem 6', value: '6' },
                  { label: 'sem 7', value: '7' },
                  { label: 'sem 8', value: '8' },
                  { label: 'sem 9', value: '9' },
                  { label: 'sem 10', value: '10' },
                ]}
              />
            </Grid.Col>

            <Grid.Col span={4}>
              <NativeSelect
                variant="filled"
                size="md"
                label="Select the batch"
                radius="lg"
                value={stubatch}
                onChange={(event) => {
                  const selectedValue = event.target.value;
                  console.log('Selected batch:', selectedValue);
                  setStuBatch(selectedValue ? parseInt(selectedValue, 10) : null);
                }}
                data={[
                  { label: 'Select the batch', value: null }, // Initial option
                  ...(batches && batches.map((us) => ({ label: us.batch_code, value: us.id }))),
                ]}
              />
            </Grid.Col>
            <Grid.Col span={4}>
              <TextInput
                variant="filled"
                size="md"
                radius="lg"
                label="Roll no:"
                placeholder="Enter Rollno"
                value={sturollno}
                onChange={(event) => setStuRollNumber(event.target.value)}
              />
            </Grid.Col>

            <Grid.Col span={4}>
              <NativeSelect
                variant="filled"
                size="md"
                label="Select Gender"
                radius="lg"
                value={stugender}
                onChange={(event) => {
                  const selectedValue = event.target.value;
                  console.log('Selected Gender', selectedValue);
                  setStuGender(selectedValue);
                }}
                data={[
                  { label: 'Select gender', value: '' },
                  { label: 'Male', value: 'Male' },
                  { label: 'Female', value: 'Female' },
                  { label: 'Others', value: 'Others' },
                ]}
              />
            </Grid.Col>

            <Grid.Col span={4}>
              <TextInput
                variant="filled"
                size="md"
                radius="lg"
                label="Student Date_of_Birth:"
                placeholder="Student Date_of_Birth"
                value={studob}
                onChange={(event) => setStuDob(event.target.value)}
                type="date"
              />
            </Grid.Col>

            <Grid.Col span={4}>
              <TextInput
                variant="filled"
                size="md"
                radius="lg"
                label="Student Mobile_no:"
                placeholder="Enter the Student_mob"
                value={stumobile}
                onChange={(event) => setStuMobile(event.target.value)}
              />
            </Grid.Col>
          </Grid>
        </Card >
        <Group mt={30} ml={20}>
          <Button
            variant="filled"
            color="rgba(176, 176, 176, 0.75)"
            size="md"
            radius="md"
            w={100}
            c="darkgreen"
            onClick={handleAddStu}
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
