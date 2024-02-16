import { AppShell, Burger, Group, UnstyledButton,Text,Center,Box,Title,TypographyStylesProvider,Card, Divider,List, ThemeIcon, rem } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from '../Landing/home.module.css'
import { Header } from '@/components/Header/Header';
import Carrousel from '@/components/carsouel/carousel';
import {slides} from '../../data/carrsouel.json'
import { IconCircleCheck, IconCircleDashed } from '@tabler/icons-react';
import { Link } from 'react-router-dom';

export function About() {
  const [opened, { toggle }] = useDisclosure();
  const images = [
    'https://imgs.search.brave.com/lIy71SXwyZ7lX9RndCQIzNuGC3GyzH6kug4h4eyzjHo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/c3RhdGljLWNvbnRl/bnRzLnlvdXRoNHdv/cmsuY29tL3VuaXZl/cnNpdHkvRG9jdW1l/bnRzL0NvbGxlZ2Vz/L25ld3NFdmVudC8w/YTRjYTIxOS00MThi/LTRlY2MtYmFiYS05/MjgzMThiYjY0OWQu/anBn',
    'https://imgs.search.brave.com/nxnmazg84i_LUCkDvnHLveXPMwbxDy3R2UOHFHRD08k/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/dGFyZ2V0YWRtaXNz/aW9uLmNvbS9pbWcv/Y29sbGVnZXMvb3B0/aW1pemVkLzYwMC9J/TUctMS05NjA1NzQ5/LmpwZw'
    // Add more image URLs as needed
  ];
  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: 'sm', collapsed: { desktop: true, mobile: !opened } }}
      bg="#c1bcac"
    >
      <AppShell.Header bg="#676F9D">
        <Group h="100%" c="white" >
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm"  />
          <Group justify="space-between" style={{ flex: 1 }}  >
          <Title order={4}>RYMEC PMS</Title>  
            <Group ml="xl" gap={0} visibleFrom="sm">
            <Header/>
            
            </Group>
          </Group>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar py="md" px={4} bg="#676F9D" c="white">
        <UnstyledButton className={classes.control}>Home</UnstyledButton>
        <UnstyledButton className={classes.control}>About Us</UnstyledButton>
        <UnstyledButton className={classes.control}>Student</UnstyledButton>
        <UnstyledButton className={classes.control}>Faculty</UnstyledButton>
        <UnstyledButton className={classes.control}>HR</UnstyledButton>

      </AppShell.Navbar>
      <AppShell.Main bg="#2D3250" >
        <Group  mx={240} p={20}justify="center" >
            <Card bg="#676F9D" w="100%" h="100%"  ta="center" radius={10} c="white" >
            <Title order={2}>About Placement</Title>
            <Divider/>
            <Title c="teal.4" my={10} order={4}>"GOD HAS PROVIDED A JOB FOR EVERY ONE & OUR JOB IS TO GET YOU ON"</Title>
            <Text mx={100} my={10} fz="xl">
            The Training and Placement Cell imparts training to students by giving emphasis on General Aptitude, Motivational Skills, Communication Skills, Interpersonal Relationships, Leadership Qualities, Group Discussions & Interview Techniques. Resource persons and professionals from reputed organizations along with college faculties train the students. The Training and Placement Cell also helps the weak students to improve their academic performance by counseling. The Training and Placement Cell provides the infra-structural facilities to conduct group discussions, tests & interviews besides catering to other logistics. The database of the students is managed by the cell, which plays a critical role in getting jobs to the students.
            </Text>
            <Title ta="left" mx={100} order={4} c="teal.4" my={20}>The primary role of the Training and Placement cell is to:</Title>
            <List
                spacing="xs"
                size="sm"
                ta="left"
                mx={100}
                fz="lg"
                icon={
        <ThemeIcon color="teal" size={24} radius="xl">
          <IconCircleCheck style={{ width: rem(16), height: rem(16) }} />
        </ThemeIcon>
      }
    >
      <List.Item>Prepare students for successful performance in competitive exams like GATE,GRE,TOEFL,CAT,GMAT, AMCAT,COCUBES etc</List.Item>
      <List.Item> Develop communication abilities by conducting GD’s and mock interviews.</List.Item>
      <List.Item>Invite Industry and prospective employers to organize campus interviews.</List.Item>
      <List.Item>Provide fruitful industry-institute interaction.</List.Item>
   
    </List>
    <Title order={4} my={30}>OBJECTIVES</Title>
            </Card>
        </Group>
      </AppShell.Main>
    </AppShell>
  );
}