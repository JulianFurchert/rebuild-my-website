import { IconButton } from './IconButton';
import { Sun } from 'react-feather';

type ThemeToggleProp = {
  toggleTheme: () => void
}

export const ThemeToggle: React.FC<ThemeToggleProp> = ({ toggleTheme }) => {
  return (
    <IconButton onClick={toggleTheme}>
      <Sun size={20} />
    </IconButton>
  );
};