import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { Router } from './Router';
import { theme } from './theme';

<<<<<<< HEAD
import './app.module.css'
=======
import  './app.module.css';
>>>>>>> 1a212b0429915436d5f75c44362907967374c3a2

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <Router/>
    </MantineProvider>
  );
}
