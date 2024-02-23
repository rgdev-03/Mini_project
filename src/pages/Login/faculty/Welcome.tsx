import React from 'react';
import {
  Grid, Tabs, TextInput, PasswordInput, Anchor, Checkbox, Button, Group, Avatar, Divider, Fieldset, Text
} from '@mantine/core';
import { IconBrandGoogleFilled, IconBrandWindows, IconBrandFacebookFilled } from '@tabler/icons-react';
import classes from './Login.module.css'
import { Link } from 'react-router-dom';


<<<<<<< HEAD:src/components/Login/Welcome.tsx
const GoogleOAuthButton = () => {
  const responseGoogle = (response: any) => {
    console.log(response);
    // Handle the OAuth response, like sending the token to your backend
  };
  
  return (
    <GoogleLogin
      clientId="142525109657-6t0h8ucg8vm5pgnrpsmg22lvhr6soocl.apps.googleusercontent.com" // Replace with your Google client ID
      buttonText="Login with Google"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={'single_host_origin'}
    />
  );
};
=======
>>>>>>> 381ae4d03cdf5139c0e6a20fd817ffb91d966e15:src/pages/Login/faculty/Welcome.tsx

const LoginTab = () => (
  <Fieldset variant="unstyled">
    <Text size='lg' ta={"center"} >Welcome back</Text>
    <TextInput placeholder="email/phone num" />
    <PasswordInput placeholder="Password" mt={"md"} />
    <Anchor href="#" underline="hover">
      <Text ta={"right"}>forgot password?</Text>
    </Anchor>
    <Checkbox defaultChecked label="Remember me" size="xs" />
   <Link to="/facultyland">
    <Button fullWidth mt={"md"} color="black">Login</Button></Link>
    <Divider my="xs" label="Or" labelPosition="center" />
    <Group style={{ alignContent: "center", justifyContent: "center", marginTop: "10px" ,marginRight:"20px", padding:""}}>
  
    </Group>
  </Fieldset>
);

const SignupTab = () => (
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
    <a href="/navbar">
    <Button fullWidth mt={"md"} bg={"black"}>Signup</Button></a>
  </Fieldset>
);

export function Login() {
  return (
    
    <Grid className={classes.grid}>
<<<<<<< HEAD:src/components/Login/Welcome.tsx
      <Grid.Col mt={150}>
=======
      <Grid.Col span={6} offset={6} className={classes.col} >
>>>>>>> 381ae4d03cdf5139c0e6a20fd817ffb91d966e15:src/pages/Login/faculty/Welcome.tsx
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
