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
import { getStdID } from '@/utils/fetchStdID';
import { useState } from 'react';

export function AddCertificates() {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);

  const stdId = getStdID();
  console.log(stdId);
  

  const [cert_name, setCertName] = useState('');

  const [cert_date, setCertDate] = useState('');
  // const [cert_img, setCertImg] = useState('');
  const [org_name, setOrgName] = useState('');




  const [showSuccess, setShowSuccess] = useState(false);
  const [redirectUrl, setRedirectUrl] = useState('');

  const handleAddCertficate = async () => {
    try {
      const certData = {
        std_id: stdId,
        certification_name:cert_name,
        certi_e_date:cert_date,
        // image_upload:cert_img,
        org:org_name,
      };
  
      console.log('Data being sent:', certData);

      const response = await fetch('http://127.0.0.1:8000/api/certi_skills/ ', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(certData),
        
      });
  
      if (response.ok) {
        setRedirectUrl('/stucertificates');
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
              ADD CERTIFICATES
            </Title>
              <TextInput label="Certificate-Name" 
              value={cert_name}
              onChange={(event) => setCertName(event.target.value)}
              required/>
              <TextInput label="Organization-Name" required mt="lg"
              value={org_name}
              onChange={(event) => setOrgName(event.target.value)}/>
              <TextInput label="Issued-Date" required type="date" mt="lg"
              value={cert_date}
              onChange={(event) => setCertDate(event.target.value)}/>
              <TextInput label="Add File" type="file" mt="lg"/>
              <Group justify="center">
                <Button type="submit" justify="center" w="100%" mt="xl" onClick={handleAddCertficate}>
                  ADD CERTIFICATES
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
