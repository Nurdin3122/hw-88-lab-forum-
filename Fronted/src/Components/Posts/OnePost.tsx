import React from 'react';
import {useParams} from "react-router-dom";
import {useAppSelector} from "../../app/hooks.ts";
import {userState} from "../Users/UsersSlice.ts";
import ShowOnePost from "./ShowOnePost.tsx";
import CommentsForm from "../Comments/CommentsForm.tsx";
import Comments from "../Comments/Comments.tsx";

const OnePost = () => {
    const {id}:string = useParams();
    const user = useAppSelector(userState);
    return (
        <div>
            {user ? (
                <>
                    <ShowOnePost id={id}/>
                    <Comments id={id}/>
                    <CommentsForm id={id}/>
                </>

            ) : (
                <>
                    <ShowOnePost id={id}/>
                    <Comments/>
                </>
            )}
        </div>
    );
};

export default OnePost;