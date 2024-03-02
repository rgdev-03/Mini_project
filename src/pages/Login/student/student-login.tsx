import React, { useState } from 'react';
import {
  Grid,
  Image,
  Tabs,
  TextInput,
  PasswordInput,
  Anchor,
  Button,
  Group,
} from '@mantine/core';
import { Link, Form } from 'react-router-dom';
import classes from './login.module.css';

const LoginTab = () => (
  <Form action="/stuland" style={{ padding: '20px' }}>
    <TextInput placeholder="User-Name" required />
    <TextInput placeholder="Password" type="password" required mt="lg" />
    <Group justify="right">
      <Link to="#">
        <Anchor>Forgot password</Anchor>
      </Link>
    </Group>
    <Group justify="center">
      <Button
        type="submit"
        justify="center"
        w="100%"
        mt="xl"
        bg="transparent"
        style={{ border: '2px solid #F8B179' }}
      >
        Login
      </Button>
    </Group>
  </Form>
);

export function StuLogin() {
  const [credentials, setCredentials] = useState({ username: '', password: '' });

  const handleLogin = () => {
    fetch('http://localhost:8000/login/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
    .then(response => response.json())
    .then(result => {
      if (result.access) {
        console.log(result.access);
        window.location.href ='/stuland';
        localStorage.setItem('json-web-token', result.access);
        
      }
      else{
        alert('Enter Correct Credientials')
      }
    })
    .catch(error => {
      console.error(error);
    });
  };

  return (
    <Grid overflow="hidden">
      <Grid.Col span={{ base: 12, md: 8, lg: 6 }} bg="#2D3250" h="102vh" visibleFrom="md">
        <Image src="https://rymec.edu.in/wp-content/uploads/2023/03/baim5.png" h="100%" />
      </Grid.Col>
      <Grid.Col span={{ base: 12, md: 8, lg: 6 }} bg="#2D3250" h="102vh" ta="center" pt={150}>
        <Tabs variant="outline" radius="lg" defaultValue="gallery" className={classes.tabs}>
          <Tabs.List className={classes.tabslist}>
            <Tabs.Tab value="gallery" className={classes.tab}>
              LOGIN
            </Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="gallery" className={classes.panel}>
              <TextInput
                placeholder="User-Name"
                required
                value={credentials.username}
                onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
              />
              <TextInput
                placeholder="Password"
                type="password"
                required
                mt="lg"
                value={credentials.password}
                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
              />
              <Group justify="right">
                <Link to="#">
                  <Anchor>Forgot password</Anchor>
                </Link>
              </Group>
              <Group justify="center">
                <Button
                  type="submit"
                  justify="center"
                  w="100%"
                  mt="xl"
                  bg="transparent"
                  style={{ border: '2px solid #F8B179' }}
                  onClick={handleLogin}
                >
                  Login
                </Button>
              </Group>
          </Tabs.Panel>
        </Tabs>
      </Grid.Col>
    </Grid>
  );
}
