import { Header } from '@/components/Header/Header';
import { StaffNavBar } from '@/components/staffnav/staffnav';
import { AppShell, Burger, Group, Grid,Text,TextInput,Title} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { NativeSelect } from '@mantine/core';
import { Link } from 'react-router-dom';
import {Breadcrumbs} from '@mantine/core';
import { Textarea, Button} from '@mantine/core';
import classes from '../Student/student.module.css'
import { YearPickerInput } from '@mantine/dates';
import '@mantine/dates/styles.css';

import { useState } from 'react';


export function StudentsAdd() {
    const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
    const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);  

    const [value, setValue] = useState<Date | null>(null);

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
        <Group h="100%" px="md"  >
          <Burger opened={mobileOpened} onClick={toggleMobile} hiddenFrom="sm" size="sm" />
            <Title order={4}>RYMEC PMS</Title>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar >
        <StaffNavBar/>
       
      </AppShell.Navbar>
      <AppShell.Main>
       
      
  
        <Text>
          <h1>Student details</h1>
          </Text>
          
        <Grid>
      <Grid.Col span={4} >
      <TextInput
      ml="10px"
      variant="filled"
      size="md"
      w="300px"
      radius="lg"
      label="Student Name:"
      placeholder="Student Name"
     />
      </Grid.Col>

      <Grid.Col span={4}>
      <TextInput
      variant="filled"
      size="md"
      w="300px"
      radius="lg"
      label="USN:"
      placeholder="Enter USN"
     />
      </Grid.Col>

      <Grid.Col span={4}>
      <NativeSelect variant="filled" size="md" w="300px" radius="lg" label="Branch:" data={['Select Branch', 'CSE', 'EC', 'EEE', 'CIV', 'ME', 'ISE', 'AIML', 'DS']}/>       
      </Grid.Col>

      <Grid.Col span={4}>
      <NativeSelect variant="filled" my={10} ml="10px" w="300px" size="md" radius="lg" label="Section:" mb="10px" data={['Select Section', 'A', 'B', 'C']} />
      </Grid.Col>

      <Grid.Col span={4}>
      <NativeSelect variant="filled" my={10} w="300px" size="md" radius="lg" label="Semester:" mb="10px" data={['Select Semester', '1', '2','3','4','5','6','7','8']}/>      
      </Grid.Col>

      <Grid.Col span={4}>
      <YearPickerInput
      label="Pick date"
      placeholder="Pick date"
      value={value}
      onChange={setValue}
    />
      </Grid.Col>

      <Grid.Col span={4}>
      <TextInput
      variant="filled"
      size="md"
      w="300px"
      ml="13px"
      mt="6px"
      my={10}
      radius="lg"
      label="Roll Number:"
      placeholder="Student Roll No"
      />
      </Grid.Col>

      <Grid.Col span={4}>
      <NativeSelect variant="filled" my={10} w="300px" size="md" radius="lg" label="Gender:" mt="6px"  data={['Select Gender', 'Male', 'Female', 'Other']}/>      
      </Grid.Col>

      <Grid.Col span={4}>
      <TextInput
      variant="filled"
      size="md"
      w="300px"
      ml="3px"
      mt="6px"
      my={10}
      radius="lg"
      label="Enter DOB:"
      type="date"
     />
      </Grid.Col>

      <Grid.Col span={4}>  
      <TextInput
      variant="filled"
      size="md"
      w="300px"
      ml="13px"
      mt="6px"
      my={10}
      radius="lg"
      label="Mobile No:"
      type="tel"
     />
     </Grid.Col>
  
      
     
    </Grid>
    <Group mt={30} ml={20}>
            <Button variant="filled" color="rgba(176, 176, 176, 0.75)" size="md" radius="md" w={100} c="darkgreen">Add</Button>
            <Button variant="filled" color="rgba(176, 176, 176, 0.75)" size="md" radius="md" c="red">Cancel</Button>
    </Group>
      </AppShell.Main>
    </AppShell>
  );
}