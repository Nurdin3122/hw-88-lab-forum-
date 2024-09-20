import React from 'react';
import {useParams} from "react-router-dom";
import {useAppSelector} from "../../app/hooks.ts";
import {userState} from "../Users/UsersSlice.ts";
import ShowOnePost from "./ShowOnePost.tsx";
import DontShowOnePost from "./DontShowOnePost.tsx";

const OnePost = () => {
    const {id}:string = useParams();
    const user = useAppSelector(userState);
    return (
        <div>
            {user ? (
                <ShowOnePost id={id}/>
            ) : (
                <DontShowOnePost/>
            )}
        </div>
    );
};

export default OnePost;