import { Navbar } from '@/components/Navbar/Navbar';
import { AppShell, Grid} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { NativeSelect } from '@mantine/core';
import { Link } from 'react-router-dom';
import { Group } from '@mantine/core';
import { Button } from '@mantine/core';

export function Staffadd() {
  const [opened] = useDisclosure();
  return (
    <AppShell
      navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
      padding="md"
    >

      <AppShell.Navbar >
        <Navbar/>
      </AppShell.Navbar>

      <AppShell.Main>
        <Grid>

      <Grid.Col span={4}>
      <NativeSelect variant="filled" size="lg" w="300px" radius="lg" mt="40px" label="Name:" ml={20} data={['Name', 'Angular', 'Vue']}/>       
      </Grid.Col>

      <Grid.Col span={4}>
      <NativeSelect variant="filled" size="lg" w="300px" radius="lg" mt="40px" label="Branch:" ml={20} data={['Branch', 'Angular', 'Vue']}/>       
      </Grid.Col>

      <Grid.Col span={3}>
      <NativeSelect variant="filled" size="lg" w="300px" radius="lg" mt="40px" label="Department:" ml={20} data={['Department', 'Angular', 'Vue']}/>       
      </Grid.Col>
    
    </Grid>
      </AppShell.Main>
    </AppShell>
  );
}