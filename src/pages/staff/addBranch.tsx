import { NavBar } from '@/components/stunav/Navbar';
import { AppShell, Grid, Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { NativeSelect } from '@mantine/core';
import { Button, Group, Burger, Title, TextInput, Table, Input, Card } from '@mantine/core';
import classes from '../Student/student.module.css';
import { StaffNavBar } from '@/components/staffnav/staffnav';
import { useEffect, useState } from 'react';
export function AddBranch() {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);
  const [showSuccess, setShowSuccess] = useState(false);

  const [redirectUrl, setRedirectUrl] = useState('');
  const [branch, setBranch] = useState([]);
  const [branchcode, setBranchCode] = useState([]);
  const [branchData, setBranchData] = useState([]);

  const handleAddBranch = async () => {
    try {
      const branchData = {
        branch_name: branch,
        branch_code: branchcode,
      };

      console.log('Data being sent:', branchData);

      const response = await fetch('http://127.0.0.1:8000/api/branch/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(branchData),
      });

      if (response.ok) {
        setRedirectUrl('/addbranch');
        setShowSuccess(true);
        console.log('Batch added successfully');
      } else {
        console.error('Failed to add batch:', response.status, response.statusText);
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/branch/');
        const data = await response.json();
        setBranchData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  const rows = branchData.map((element) => (
    <Table.Tr key={element.id}>
      <Table.Td>{element.branch_name}</Table.Td>
      <Table.Td>{element.branch_code}</Table.Td>
    </Table.Tr>
  ));

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
          <Grid.Col span={3}>
            <Input
              variant="filled"
              size="lg"
              radius="md"
              w={330}
              ml={20}
              mt={40}
              placeholder="Branch Name:"
              value={branch}
              onChange={(event) => setBranch(event.target.value)}
            />
          </Grid.Col>

          <Grid.Col span={4}>
            <Input
              variant="filled"
              size="lg"
              radius="md"
              w={330}
              ml={80}
              mt={40}
              placeholder="Branch Code:"
              value={branchcode}
              onChange={(event) => setBranchCode(event.target.value)}
            />
          </Grid.Col>
        </Grid>
        <Group mt={30} ml={20}>
          <Button
            variant="filled"
            color="rgba(176, 176, 176, 0.75)"
            size="md"
            radius="md"
            w={100}
            onClick={handleAddBranch}

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
        <Card className={classes.card} mt="lg">
          <Table horizontalSpacing="70px" style={{ width: 'fitcontent' }}>
            <Table.Thead>
              <Table.Tr>
                <Table.Th>Branch_Name</Table.Th>
                <Table.Th>Branch_code</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{rows}</Table.Tbody>
          </Table>
        </Card>
      </AppShell.Main>
    </AppShell>
  );
}
