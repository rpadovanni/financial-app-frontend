import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './ui/theme';

const App = () => {
    const [theme, setTheme] = useState(lightTheme);

    const onToggleTheme = () => {
        if (theme === lightTheme) {
            setTheme(darkTheme);
        } else {
            setTheme(lightTheme);
        }
    };

    return (
        <ThemeProvider theme={theme}>
            <header style={{ backgroundColor: theme.backgroundColor }}>
                <h1 style={{ color: theme.primaryColor }}>Theme</h1>
                <h2 style={{ color: theme.secondaryColor }}>Toggle Test</h2>
                <button onClick={onToggleTheme}>TOGGLE THEME</button>
            </header>
        </ThemeProvider>
    );
};

export default App;
