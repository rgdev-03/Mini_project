import React from 'react';
import {
  Grid, Tabs, TextInput, PasswordInput, Anchor, Checkbox, Button, Group, Avatar, Divider, Fieldset, Text
} from '@mantine/core';
import { IconBrandGoogleFilled, IconBrandWindows, IconBrandFacebookFilled } from '@tabler/icons-react';
import classes from './Login.module.css'
import { Link,Form } from 'react-router-dom';

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
    
    <Button type="submit" justify="center" w="100%" mt="xl" bg="transparent" style={{border:"2px solid #F8B179"}}>Signup</Button>
    </Group>
  </Form>
);

export function FacultyLogin() {
  return (
    
    <Grid className={classes.grid}>

      <Grid.Col span={6} offset={6} className={classes.col} >

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
