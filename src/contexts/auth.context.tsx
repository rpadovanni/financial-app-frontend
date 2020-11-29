import { createContext, useContext, useEffect, useState } from 'react';

// INTERFACES
import IAuthContext from '../interfaces/IAuthContext';
import { IUser, IUserCredentials } from '../interfaces/IUser';

// SERVICES
import api from '../services/api';

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider: React.FC = ({ children }) => {
    const [user, setUser] = useState<IUser | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState();

    useEffect(() => {
        const loadStoredData = () => {
            const storedUser = localStorage.getItem('@FinancialApp:user');
            const storedToken = localStorage.getItem('@FinancialApp:token');

            if (storedUser && storedToken) {
                api.defaults.headers.authorization = `Bearer ${storedToken}`;

                setUser(JSON.parse(storedUser));
            }

            setIsLoading(false);
        };

        loadStoredData();
    }, []);

    const signIn = async (userCredentials: IUserCredentials) => {
        // TODO: Move logic to service
        console.log('hoooowdy');
        try {
            const response = await api.post('/authenticate', userCredentials);

            const { user, token } = response.data;
            setUser(user);

            api.defaults.headers.authorization = `Bearer ${token}`;

            localStorage.setItem('@FinancialApp:user', JSON.stringify(user));
            localStorage.setItem('@FinancialApp:token', token);
        } catch (err) {
            setErrorMessage(err.response.data.message);
        }
    };

    const signOut = () => {
        localStorage.clear();
        api.defaults.headers.authorization = '';

        setUser(null);
    };

    return (
        <AuthContext.Provider
            value={{
                errorMessage,
                isLoading,
                isLogged: !!user,
                signIn,
                signOut,
                user,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

const useAuth = () => {
    const context = useContext(AuthContext);
    return context;
};

export { useAuth, AuthProvider as default };
