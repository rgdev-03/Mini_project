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
  Center,
  TextInput,
  Container,
  Modal,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './student.module.css';
import { Form } from 'react-router-dom';
import { useState } from 'react';
import { getStdID } from '@/utils/fetchStdID';

export function AddProjects() {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);

  const stdId = getStdID();
  console.log(stdId);
  

  const [projName, setProjName] = useState('');

  const [projType, setProjType] = useState('');
  // const [cert_img, setCertImg] = useState('');
  const [projUrl, setProjUrl] = useState('');




  const [showSuccess, setShowSuccess] = useState(false);
  const [redirectUrl, setRedirectUrl] = useState('');

  const handleAddProject = async () => {
    try {
      const proData = {
        std_id: stdId,
        project_name:projName,
        project_type:projType,
        // image_upload:cert_img,
        project_repo_url:projUrl,
      };
  
      console.log('Data being sent:', proData);

      const response = await fetch('http://localhost:8000/api/projects/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(proData),
        
      });
  
      if (response.ok) {
        setRedirectUrl('/stuprojects');
        setShowSuccess(true);
        // console.log('Batch added successfully');
      } else {
        console.error('Failed to add Batch:', response.status, response.statusText);
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
      <AppShell.Main>
        <Group justify="center" mt={100}>
          <Card w={500} className={classes.card}>
            <Title order={3} ta="center">
              ADD PROJECTS
            </Title>

              <TextInput label="Project-Name" 
              value={projName}
              onChange={(event) => setProjName(event.target.value)}
              required></TextInput>
              <TextInput label="Project-Type"
              value={projType}
              onChange={(event) => setProjType(event.target.value)}
              required mt="lg"></TextInput>

              <TextInput label="Git-Repo_Link" 
              value={projUrl}
              onChange={(event) => setProjUrl(event.target.value)}
              required type="text" mt="lg"></TextInput>
              <Group justify="center">
                <Button type="submit" justify="center" w="100%" mt="xl" onClick={handleAddProject}>
                  ADD Projects
                </Button>
              </Group>
          </Card>
        </Group>

        <Modal
          title="Success"
          opened={showSuccess}
          onClose={handleModalClose}
          withCloseButton
          >
          Data added successfully!
        </Modal>
      </AppShell.Main>
    </AppShell>
  );
}
