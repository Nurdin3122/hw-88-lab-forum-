import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../app/hooks.ts";
import {getOnePost} from "./PostsThunks.ts";
import {postLoading, postState} from "./PostsSlice.ts";
import Spinner from "../Spinner/Spinner.tsx";
import OnePostItem from "./OnePostItem.tsx";

interface Props {
    id:string;
}


const ShowOnePost: React.FC<Props> = ({id}) => {
    const dispatch = useAppDispatch();
    const post = useAppSelector(postState);
    const loading = useAppSelector(postLoading);

    useEffect(() => {
        dispatch(getOnePost(id));
    }, [id]);

    return (
        <div>
            {
                loading ? (
                    <Spinner/>
                ) : (
                    post ? (
                        <OnePostItem
                            key={post._id}
                            _id={post._id}
                            user={post.user.username}
                            title={post.title}
                            description={post.description}
                            image={post.image}
                            createdAt={post.createdAt}
                        />
                    ) : (
                        <p>Пост не найден</p>
                    )
                    )}

        </div>
    );
};

export default ShowOnePost;