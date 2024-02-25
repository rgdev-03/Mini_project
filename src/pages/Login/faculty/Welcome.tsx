import React, { useState } from 'react';
import {
  Grid, Tabs, TextInput, PasswordInput, Anchor, Checkbox, Button, Group, Avatar, Divider, Fieldset, Text,Image
} from '@mantine/core';
import { IconBrandGoogleFilled, IconBrandWindows, IconBrandFacebookFilled } from '@tabler/icons-react';
import { Link ,Form} from 'react-router-dom';
import classes from '../student/login.module.css'

const LoginTab = () => (
  <Form action="/facultyland"style={{padding:"20px"}}>
  <TextInput
placeholder='User-Name'  required>
  </TextInput>
  <TextInput
  placeholder='Password'
  type="password"
  
required
  mt="lg">
  </TextInput>
<Group justify="right">
  <Link to="#">
    <Anchor>Forgot password</Anchor>
  </Link>
  </Group>
  <Group justify="center">
  <Button type="submit" justify="center" w="100%" mt="xl" bg="transparent" style={{border:"2px solid #F8B179"}}>Login</Button>
  </Group>
</Form>
);

const SignupTab = () => (
  <Form action="/facultyland"style={{padding:"20px"}}>
  <TextInput
placeholder='User-Name'  required
  >
  </TextInput>
  <TextInput
placeholder='Branch' 
mt="lg" required
  >
  </TextInput>
  <TextInput
  placeholder='Password'
  type="password"
  
required
  mt="lg">
  </TextInput>
  <TextInput
  placeholder='confirm Password'
  type="password"
  
required
  mt="lg">
  </TextInput>

  <Group justify="center">
  
  <Button type="submit" justify="center" w="100%" mt="xl" bg="transparent" color="white" style={{border:"2px solid #F8B179"}}>Signup</Button>
  </Group>
</Form>
);

export function StaffLogin() {




const [showSuccess, setShowSuccess] = useState(false); 
const [redirectUrl, setRedirectUrl] = useState(''); 
  return (
    
    <Grid overflow="hidden">
    <Grid.Col span={{ base: 12, md: 8, lg: 6 }} bg="#2D3250" h="102vh"visibleFrom="md">
       <Image
    src="https://rymec.edu.in/wp-content/uploads/2023/03/baim5.png"
    h="100%"
  /></Grid.Col>
    <Grid.Col span={{ base: 12, md: 8, lg: 6 }} bg="#2D3250" h="102vh" ta="center" pt={150}>
    <Tabs  variant="outline" radius="lg" defaultValue="gallery" className={classes.tabs} >
        <Tabs.List className={classes.tabslist}>
          <Tabs.Tab value="gallery" className={classes.tab}>LOGIN</Tabs.Tab>
          <Tabs.Tab value="messages" className={classes.tab}>SIGNUP</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="gallery" className={classes.panel}>
          <LoginTab />
        </Tabs.Panel>
        <Tabs.Panel value="messages" className={classes.panel}>
          <SignupTab />
        </Tabs.Panel>
      </Tabs>
    </Grid.Col>
  </Grid>
    
  );
}
