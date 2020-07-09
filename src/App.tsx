import React, { lazy, Suspense } from 'react';
import './App.css';
import IUser from './interfaces/IUser';
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import SkeletonLoading from './components/ui/skeleton-loading/SkeletonLoading';

// const User = lazy(() => import('./components/user/User'));
const UserList = lazy(() => import('./components/user/UserList'));

// Mocking load time for User component
const User = lazy(async () => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    return import('./components/user/User');
});

function App() {
    const user: IUser = {
        name: 'Rafael',
    };

    return (
        <Router>
            <div className='App'>
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
            </div>
        </Router>
    );
}

export default App;
