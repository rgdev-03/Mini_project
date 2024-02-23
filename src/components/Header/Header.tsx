import { AppShell, Avatar, Group ,Text,UnstyledButton,Title} from '@mantine/core';
import classes from './Header.module.css'
import { Link } from 'react-router-dom';
// Height is an object with breakpoints:
// - height is 48 when viewport width is < theme.breakpoints.sm
// - height is 60 when viewport width is >= theme.breakpoints.sm and < theme.breakpoints.lg
// - height is 76 when viewport width is >= theme.breakpoints.lg
export function Header() {
  return (
    <AppShell header={{ height: { base: 50, sm: 50, lg: 60 } }}>
      <AppShell.Header p="1" bg="#676F9D">
        <Group>
        </Group>
        <Group justify="space-between">
        <Title pt="xs" order={4}>RYMEC PMS</Title>
          <Group justify="right">
          <Link to="/">
          <UnstyledButton className={classes.control}>Home</UnstyledButton>
          </Link>
          <Link to="#">
          <UnstyledButton className={classes.control}>About Us</UnstyledButton>
          </Link><Link to="#">
          <UnstyledButton className={classes.control}>Student</UnstyledButton>
          </Link><Link to="/login">
          <UnstyledButton className={classes.control}>Faculty</UnstyledButton>
          </Link><Link to="/">
          <UnstyledButton className={classes.control}>HR</UnstyledButton>
          </Link>
          </Group>
        </Group>
      </AppShell.Header>
    </AppShell>
  );
}