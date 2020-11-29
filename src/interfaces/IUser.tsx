export interface IUser {
    userId: number;
    name: string;
    email: string;
}

export interface ILoggedUser {
    token: string;
    user: IUser;
}

export interface IUserCredentials {
    email: string;
    password: string;
}
