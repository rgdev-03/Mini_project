import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { Router } from './Router';
import { theme } from './theme';
<<<<<<< HEAD
import './pages/app.css'
=======
import './app.css'
>>>>>>> 381ae4d03cdf5139c0e6a20fd817ffb91d966e15
export default function App() {
  return (
    <MantineProvider theme={theme}>
      <Router />
    </MantineProvider>
  );
}
