import React from 'react';
import IUser from '../../interfaces/IUser';

interface Props {
    user: IUser;
};

const User: React.FC<Props> = ({ user }) => {
    return (
        <li>
            <b>Name:</b> { user.name }
        </li>
    );
};

export default User;