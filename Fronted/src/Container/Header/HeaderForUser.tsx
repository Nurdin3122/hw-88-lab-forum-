import React from 'react';
import {Link} from "react-router-dom";
import {User} from "../../../Types.ts";
import {useAppDispatch} from "../../app/hooks.ts";
import {logout} from "../../Components/Users/UsersThunks.ts";

interface Props {
    user:User;
}

const HeaderForUser:React.FC<Props> = ({user}) => {
    const dispatch = useAppDispatch();
    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand mb-0 h1">Form</Link>
                <div className="justify-content-end">
                    <span className="me-5">Hello: {user.username}</span>
                    <Link to="/create-post" className="btn btn-dark ms-3">Add a new post</Link>
                    <button className="btn btn-close-white" onClick={handleLogout}>Logout</button>
                </div>
            </div>
        </nav>
    );
};

export default HeaderForUser;