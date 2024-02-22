import React from 'react';
import {
  Grid, Tabs, TextInput, PasswordInput, Anchor, Checkbox, Button, Group, Avatar, Divider, Fieldset, Text
} from '@mantine/core';
import { IconBrandGoogleFilled, IconBrandWindows, IconBrandFacebookFilled } from '@tabler/icons-react';
import classes from './Login.module.css'
import { Link } from 'react-router-dom';



const LoginTab = () => (
    <Link to="/navbar">
  <Fieldset variant="unstyled">
    <Text size='lg' ta={"center"}>Welcome back</Text>
    <TextInput placeholder="email/phone num" />
    <PasswordInput placeholder="Password" mt={"md"} />
    <Anchor href="#" underline="hover">
      <Text ta={"right"}>forgot password?</Text>
    </Anchor>
    <Checkbox defaultChecked label="Remember me" size="xs" />
    <a href="#">
    <Button fullWidth mt={"md"} color="black">Login</Button></a>
    <Divider my="xs" label="Or" labelPosition="center" />

    <Group style={{ alignContent: "center", justifyContent: "center", marginTop: "10px" ,marginRight:"20px", padding:""}}>
  
    </Group>
  </Fieldset>
  </Link>
);

const SignupTab = () => (
    <Link to="/navbar">
  <Fieldset variant="unstyled">
    <Text size='lg' p={"10"} ta={"center"} >Create an account</Text>
    <TextInput placeholder="username" />
    <TextInput placeholder="email/phone num"mt={"10"} />
    <PasswordInput placeholder="new password" mt={"10"}/>
    <PasswordInput placeholder="confirm password" mt={"10"} />
    <Divider my="xs" label="Or" labelPosition="center" />
    <Group className={classes.social}>
      <Avatar><IconBrandGoogleFilled /></Avatar>
      <Avatar><IconBrandWindows /></Avatar>
      <Avatar><IconBrandFacebookFilled /></Avatar>
    </Group>
    <Button fullWidth mt={"md"} bg={"black"}>Signup</Button>
  </Fieldset>
  </Link>
);

export function Login() {
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
