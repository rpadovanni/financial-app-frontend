import { useState } from 'react';
import { useAuth } from '../../../contexts/auth.context';
import { IUserCredentials } from '../../../interfaces/IUser';

// LOGIN PAGE COMPONENT
const SignInPage: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const { signIn, errorMessage } = useAuth();

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>, type: string) => {
        console.log(event.currentTarget.value);
        if (type === 'email') {
            return setEmail(event.currentTarget.value);
        }

        return setPassword(event.currentTarget.value);
    };

    const handleSignIn = () => {
        const userCredentials: IUserCredentials = {
            email,
            password,
        };
        signIn(userCredentials);
    };

    return (
        <div>
            <input
                type="email"
                name="email"
                value={email}
                onChange={event => handleInputChange(event, 'email')}
            />
            <input
                type="password"
                name="password"
                value={password}
                onChange={event => handleInputChange(event, 'password')}
            />
            <input type="button" value="Sign In" onClick={handleSignIn} />
            {errorMessage && <span>{errorMessage}</span>}
        </div>
    );
};

export default SignInPage;
