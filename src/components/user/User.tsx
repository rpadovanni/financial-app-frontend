import { Fragment } from 'react';
import { IUser } from '../../interfaces/IUser';
import SkeletonLoading from '../ui/skeleton-loading/SkeletonLoading';

interface Props {
    user: IUser;
}

const User: React.FC<Props> = ({ user }) => {
    return (
        <Fragment>
            <li>
                <b>Name:</b> {user.name}
            </li>
            <li style={{ width: 200, height: 20 }}>
                <SkeletonLoading />
            </li>
            <div
                style={{
                    width: 100,
                    height: 100,
                    borderRadius: '50%',
                }}
            >
                <SkeletonLoading />
            </div>
        </Fragment>
    );
};

export default User;
