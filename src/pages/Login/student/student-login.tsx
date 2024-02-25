import { Grid,Image, Title, TextInput, PasswordInput, Anchor, Checkbox, Button, Group, Avatar, Divider, Fieldset, Text
} from '@mantine/core';
import { Tabs, rem } from '@mantine/core';
import { IconPhoto, IconMessageCircle, IconSettings } from '@tabler/icons-react';
import classes from './login.module.css'
import { Link ,Form} from 'react-router-dom';


const LoginTab = () => (
  <Form action="/stuland"style={{padding:"20px"}}>
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
export function StuLogin() {
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
            
          </Tabs.List>
          <Tabs.Panel value="gallery" className={classes.panel}>
            <LoginTab />
          </Tabs.Panel>
         
        </Tabs>
      </Grid.Col>
    </Grid>
  );
}