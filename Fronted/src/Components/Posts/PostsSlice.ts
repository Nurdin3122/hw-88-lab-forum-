import {Post} from "../../../Types.ts";
import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "../../app/store.ts";

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

    },
});

export const PostsReducer = PostsSlice.reducer;
export const postsState = (state:RootState) => state.posts.posts;
export const postsLoading = (state:RootState) => state.posts.postLoading;