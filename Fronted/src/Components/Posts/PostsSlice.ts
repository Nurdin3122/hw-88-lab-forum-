import {Post} from "../../../Types.ts";
import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "../../app/store.ts";
import {getPostsRequest} from "./PostsThunks.ts";

export interface PostState{
    posts:Post[];
    postLoading:boolean;
    postError:boolean;
}

const initialState:PostState = {
    posts:[],
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
    },
});

export const PostsReducer = PostsSlice.reducer;
export const postsState = (state:RootState) => state.posts.posts;
export const postsLoading = (state:RootState) => state.posts.postLoading;