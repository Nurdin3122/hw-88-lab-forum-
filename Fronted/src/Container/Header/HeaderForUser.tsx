import React from 'react';
import {Link} from "react-router-dom";
import {User} from "../../../Types.ts";

interface Props {
    user:User;
}

const HeaderForUser:React.FC<Props> = ({user}) => {
    return (
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand mb-0 h1">Form</Link>
                <div className="justify-content-end">
                   <span className="me-5">Hello: {user.username}</span>
                    <button className="btn btn-dark">Add a new post</button>
                </div>
            </div>
        </nav>
    );
};

export default HeaderForUser;