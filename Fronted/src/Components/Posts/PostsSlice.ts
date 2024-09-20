import {Post} from "../../../Types.ts";
import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "../../app/store.ts";
import {getOnePost, getPostsRequest} from "./PostsThunks.ts";

export interface PostState{
    posts:Post[];
    post:Post | null;
    onePostLoading:boolean;
    onePostError:boolean;
    postLoading:boolean;
    postError:boolean;
}

const initialState:PostState = {
    posts:[],
    post:null,
    onePostLoading:false,
    onePostError:false,
    postLoading:false,
    postError:false,
};

export const PostsSlice = createSlice<PostState>({
    name:"posts",
    initialState,
    reducers:{},
    extraReducers:(builder) => {
        builder.addCase(getPostsRequest.pending,(state) => {
            state.postLoading = true;
            state.postError = false
        });
        builder.addCase(getPostsRequest.fulfilled,(state,{payload:posts}) => {
            state.posts = posts
            state.postLoading = false;
        });
        builder.addCase(getPostsRequest.rejected,(state) => {
            state.postLoading = false;
            state.postError = true
        });


        builder.addCase(getOnePost.pending,(state) => {
            state.onePostLoading = true;
            state.onePostError = false
        });
        builder.addCase(getOnePost.fulfilled,(state,{payload:post}) => {
            state.post = post
            state.onePostLoading = false;
        });
        builder.addCase(getOnePost.rejected,(state) => {
            state.onePostLoading = false;
            state.onePostError = true
        });

    },
});

export const PostsReducer = PostsSlice.reducer;
export const postsState = (state:RootState) => state.posts.posts;
export const postsLoading = (state:RootState) => state.posts.postLoading;
export const postState = (state:RootState) => state.posts.post;
export const postLoading = (state:RootState) => state.posts.onePostLoading;

