import React from 'react';
import {Link} from "react-router-dom";

const HeaderForAnon = () => {
    return (
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand mb-0 h1">Form</Link>
                <div className="justify-content-end">
                    <Link to="/create-user-form" className="btn btn-secondary me-3">Create a new account</Link>
                    <Link to="/check-user-form" className="btn btn-dark">Log in</Link>

                </div>
            </div>
        </nav>
    );
};

export default HeaderForAnon;