import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../app/hooks.ts";
import {postsLoading, postsState} from "./PostsSlice.ts";
import {getPostsRequest} from "./PostsThunks.ts";
import Spinner from "../Spinner/Spinner.tsx";
import PostItem from "./PostItem.tsx";

const Posts = () => {
    const dispatch = useAppDispatch();
    const posts = useAppSelector(postsState);
    const loading = useAppSelector(postsLoading);

    useEffect(() => {
        dispatch(getPostsRequest());
    }, [dispatch]);
    return (
        <div className={"d-flex justify-content-center flex-column"}>
            {
                loading ? (
                    <Spinner/>
                ) : (
                    posts.map(post => (
                        <PostItem key={post._id}
                                  _id={post._id}
                                  user={post.user.username}
                                  title={post.title}
                                  description={post.description}
                                  image={post.image}
                                  createdAt={post.createdAt}
                        />
                    ))
                )
            }
        </div>
    );
};

export default Posts;