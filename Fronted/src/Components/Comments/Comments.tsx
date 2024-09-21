import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../app/hooks.ts";
import {commentsLoading, commentsState} from "./CommentsSlice.tsx";
import {getComments} from "./CommentsThunks.tsx";
import Spinner from "../Spinner/Spinner.tsx";
import CommentItem from "./CommentItem.tsx";

interface Props {
    id:string;
}


const Comments:React.FC<Props> = ({id}) => {
    const dispatch = useAppDispatch();
    const comments = useAppSelector(commentsState);
    const loading = useAppSelector(commentsLoading);

    useEffect(() => {
        dispatch(getComments(id));
    }, [dispatch]);

    return (
        <>
            {
                loading ? (
                    <Spinner/>
                ) : (
                    comments.map(comment => (
                        <CommentItem key={comment._id} _id={comment._id} comment={comment.comment} post={comment.post._id} user={comment.user.username}/>
                    ))

                )
            }

        </>
    );
};

export default Comments;