import { NavBar } from '@/components/NavBar/NavBar';
import { AppShell, Burger, Group, Skeleton, Title,Text, Box,Avatar,Card,Table, TableData, Button,Center,TextInput,Container, Grid} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './student.module.css'
import React, { useState } from 'react';
import { Form } from 'react-router-dom';
export function AddSemMarks() {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);
  const [inputs, setInputs] = useState([{ id: Math.random(), value1: '', value2: '', value3: '' }]);
  const addInputSet = () => {
    setInputs([...inputs, { id: Math.random(), value1: '', value2: '', value3: '' }]);
  };
  const updateInput = (id, field, value) => {
    setInputs(inputs.map(input => input.id === id ? { ...input, [field]: value } : input));
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
        <Group h="100%" px="md"  >
          <Burger opened={mobileOpened} onClick={toggleMobile} hiddenFrom="sm" size="sm" />
            <Title order={4}>RYMEC PMS</Title>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar style={{border:"none",backgroundColor:"#2D3250", width:"311px"}}>
       <NavBar/>
      </AppShell.Navbar>
      <AppShell.Main>
      <Group justify="right" mt="md"> 
      
        <Button bg="transparent" style={{border:"2px solid #F8B179"}} onClick={addInputSet}>Add Subject</Button>
      </Group>
      <Card className={classes.card} mt="sm">
        <Title>ADD</Title>
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
    <Group justify="center">
    <Button bg="transparent" style={{border:"2px solid #F8B179",marginTop:"10px"}} >Calculate SGPA</Button>

    </Group>
    </Card>
      </AppShell.Main>
    </AppShell>
  );
}