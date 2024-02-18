import { Grid,Image, Title, TextInput, PasswordInput, Anchor, Checkbox, Button, Group, Avatar, Divider, Fieldset, Text
} from '@mantine/core';
import { Tabs, rem } from '@mantine/core';
import { IconPhoto, IconMessageCircle, IconSettings } from '@tabler/icons-react';
import classes from './login.module.css'
import { Link } from 'react-router-dom';
const LoginTab = () => (
    <Fieldset variant="unstyled">
      <Text size='lg' ta={"center"}>Welcome back</Text>
      <TextInput placeholder="email/phone num" required/>
      <PasswordInput placeholder="Password" mt={"md"} required />
      <Anchor href="#" underline="hover">
        <Text ta={"right"}>forgot password?</Text>
      </Anchor>
      <Checkbox defaultChecked label="Remember me" size="xs" />
      <Link to="/stuland">
      <Button fullWidth mt={"md"} color="black" type="submit">Login</Button></Link>
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
      
      <Button fullWidth mt={"md"} bg={"black"}>Signup</Button>
    </Fieldset>
  );
export function Login() {
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