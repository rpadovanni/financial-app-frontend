import React, { lazy, Suspense, Fragment } from 'react';
import './App.css';
import IUser from './interfaces/IUser';
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom';

const User = lazy(() => import('./components/user/User'));
const UserList = lazy(() => import('./components/user/UserList'));
const LoadingMessage = () => <Fragment>"I'm loading..."</Fragment>;

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
                            <Link to='/user'>User</Link>
                        </div>

                        <div>
                            <Link to='/user-list'>User List</Link>
                        </div>
                    </nav>

                    <br />

                    <Suspense fallback={<LoadingMessage />}>
                        <Switch>
                            <Route path='/user'>
                                <User user={user} />
                            </Route>

                            <Route path='/user-list'>
                                <UserList />
                            </Route>
                        </Switch>
                    </Suspense>
                </header>
            </div>
        </Router>
    );
}

export default App;
