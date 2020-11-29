// INTERFACES
import { IUser, IUserCredentials } from './IUser';

export default interface IAuthContext {
    errorMessage: string | undefined;
    isLoading: boolean;
    isLogged: boolean;
    signIn(userCredentials: IUserCredentials): Promise<void>;
    signOut(): void;
    user: IUser | null;
}
