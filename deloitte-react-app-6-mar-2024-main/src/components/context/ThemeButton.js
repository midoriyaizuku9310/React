import { useTheme } from "./ThemeContext";

const ThemeButton = () => {

    const { theme, changeTheme } = useTheme();

    return (
        <button onClick={changeTheme}>
            Current theme is { theme}, press to change it 
            
        </button>

    );
};

export default ThemeButton;