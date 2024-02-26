import { NavBar } from '@/components/stunav/Navbar';
import {
  AppShell,
  Burger,
  Group,
  Title,
  Text,
  Card,
  Button,
  TextInput,
  Grid,
  Mark,
  Dialog,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './student.module.css';
import React, { useState } from 'react';
import { Form, Link } from 'react-router-dom';
export function AddSemMarks() {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);
  const [inputs, setInputs] = useState([{ id: Math.random(), value1: '', value2: '', value3: '' }]);
  const addInputSet = () => {
    setInputs([...inputs, { id: Math.random(), value1: '', value2: '', value3: '' }]);
  };
  const updateInput = (id: number, field: string, value: string) => {
    setInputs(inputs.map((input) => (input.id === id ? { ...input, [field]: value } : input)));
  };
  const [opened, { toggle, close }] = useDisclosure(false);

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
        <Group justify="right" mt="md">
          <Button bg="transparent" style={{ border: '2px solid #F8B179' }} onClick={addInputSet}>
            Add Subject
          </Button>
        </Group>
        <Group justify="center">
          <Card className={classes.card} mt="xl" w={800}>
            <Title order={3} ta="center">
              ADD SEMESTER MARKS
            </Title>
            <Form>
              {inputs.map((input, index) => (
                <Grid>
                  <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
                    <TextInput
                      placeholder="Subject"
                      value={input.value1}
                      onChange={(e) => updateInput(input.id, 'value1', e.target.value)}
                      w="100%"
                    />
                  </Grid.Col>
                  <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
                    <TextInput
                      placeholder="Marks"
                      value={input.value2}
                      onChange={(e) => updateInput(input.id, 'value2', e.target.value)}
                      w="100%"
                      type="number"
                    />
                  </Grid.Col>
                  <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
                    <TextInput
                      placeholder="Credit"
                      value={input.value3}
                      onChange={(e) => updateInput(input.id, 'value3', e.target.value)}
                      w="100%"
                      type="number"
                    />
                  </Grid.Col>
                </Grid>
              ))}
            </Form>
            <Group justify="center" ml="lg">
              <Button bg="transparent" style={{ border: '2px solid #F8B179', marginTop: '10px' }}>
                Calculate SGPA
              </Button>
            </Group>
            <Text ta="right" fz="lg">
              SGPA:<Mark ml="xs">8.9</Mark>
            </Text>
          </Card>
        </Group>
        <Dialog
          opened={opened}
          onClose={close}
          size="lg"
          radius="md"
          style={{
            border: '2px solid #F8B179',
            marginTop: '10px',
            color: '#F8B179',
            backgroundColor: '#676F9D',
          }}
        >
          <Group align="flex-end">
            <TextInput placeholder="Enter The Sem" style={{ flex: 1 }} />
            <Link to="/stuacademics">
              <Button
                bg="transparent"
                style={{ border: '2px solid #F8B179', marginTop: '10px', color: '#F8B179' }}
              >
                Save
              </Button>
            </Link>
          </Group>
        </Dialog>
        <Group justify="center">
          <Button
            bg="transparent"
            style={{ border: '2px solid #F8B179', marginTop: '10px' }}
            onClick={toggle}
          >
            Save
          </Button>
        </Group>
      </AppShell.Main>
    </AppShell>
  );
}
