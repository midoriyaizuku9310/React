
import { useTheme } from './ThemeContext';

const ThemedComponent = () => {
    const { theme } = useTheme();

    return (
        <div style={{
            color: theme === 'light' ? 'black' : 'white',
            background: theme === 'light' ? 'white' : 'black'
        }}>
            Themed Component
        </div>
    );
};

export default ThemedComponent;