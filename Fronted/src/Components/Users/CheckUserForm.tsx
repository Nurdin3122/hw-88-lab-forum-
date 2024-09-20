import React, {useState} from 'react';
import {userCheckPostRequest} from "./UsersThunks.ts";
import {UserMutation} from "../../../Types.ts";
import {useAppDispatch} from "../../app/hooks.ts";
import {useNavigate} from "react-router-dom";

const CheckUserForm = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [newUser, setNewUser] = useState<UserMutation>({
        username:"",
        password:"",
    });

    const onSend = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await dispatch(userCheckPostRequest(newUser))
            navigate('/');
        } catch(error) {
            console.log(error);
        }
    };

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewUser((prev) => ({
            ...prev,
            [event.target.name]: event.target.value,
        }))
    };

    return (
        <div>
            <h3 className="mt-5 text-center">Log in</h3>
            <form onSubmit={onSend}>

                <h5 className="mt-5 text-center">Write your name</h5>
                <div className="input-group input-group-lg">
                    <input type="text"
                           className="form-control mt-5"
                           aria-label="Sizing example input"
                           aria-describedby="inputGroup-sizing-lg"
                           name="username"
                           id="username"
                           onChange={onChange}
                           value={newUser.username}
                           required
                    />
                </div>

                <h5 className="mt-5 text-center">Your password</h5>
                <div className="input-group input-group-lg">
                    <input type="text"
                           className="form-control mt-5"
                           aria-label="Sizing example input"
                           aria-describedby="inputGroup-sizing-lg"
                           name="password"
                           id="password"
                           onChange={onChange}
                           value={newUser.password}
                           required
                    />
                </div>
                <div className="d-flex justify-content-center">
                    <button type="submit" className="btn btn-danger mt-5 mb-5">Log in</button>
                </div>

            </form>
        </div>
    );
};

export default CheckUserForm;