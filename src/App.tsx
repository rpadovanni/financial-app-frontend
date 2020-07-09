import React, { lazy, Suspense, useState } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

// COMPONENTS
import SkeletonLoading from './components/ui/skeleton-loading/SkeletonLoading';

// INTERFACES
import IUser from './interfaces/IUser';

// STYLES
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './ui/theme';
import { GlobalStyles } from './ui/global';

// LAZY IMPORTS
const UserList = lazy(() => import('./components/user/UserList'));
const User = lazy(async () => {
    // Mocking load time for User component
    await new Promise(resolve => setTimeout(resolve, 2000));
    return import('./components/user/User');
});

// APP COMPONENT
const App = () => {
    const [theme, setTheme] = useState(lightTheme);

    const onToggleTheme = () => {
        if (theme === lightTheme) {
            setTheme(darkTheme);
        } else {
            setTheme(lightTheme);
        }
    };

    const user: IUser = {
        name: 'Rafael',
    };

    return (
        <ThemeProvider theme={theme}>
            <header>
                <h1 style={{ color: theme.primaryColor }}>Theme</h1>
                <h2 style={{ color: theme.secondaryColor }}>Toggle Test</h2>
                <button onClick={onToggleTheme}>TOGGLE THEME</button>
            </header>

            <Router>
                <header className='App-header'>
                    <nav>
                        <div>
                            <Link to='/'>Home</Link>
                        </div>

                        <div>
                            <Link to='/user'>User</Link>
                        </div>

                        <div>
                            <Link to='/user-list'>User List</Link>
                        </div>
                    </nav>

                    <br />

                    <SkeletonLoading />

                    <div style={{ width: '500px', height: '50px' }}>
                        <Suspense fallback={<SkeletonLoading />}>
                            <Switch>
                                <Route path='/user'>
                                    <User user={user} />
                                </Route>

                                <Route path='/user-list'>
                                    <UserList />
                                </Route>
                            </Switch>
                        </Suspense>
                    </div>
                </header>
            </Router>

            {/* Global Styles */}
            <GlobalStyles />
        </ThemeProvider>
    );
};

export default App;
