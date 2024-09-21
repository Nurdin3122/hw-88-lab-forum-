import {Comment} from "../../../Types.ts";
import {createSlice} from "@reduxjs/toolkit";
import {getComments, postComment} from "./CommentsThunks.tsx";
import {RootState} from "../../app/store.ts";

export interface CommentState {
    comments:Comment[];
    commentLoading:boolean;
    commentError:boolean;
}

export const initialState:CommentState = {
    comments:[],
    commentLoading:false,
    commentError:false,
};

export const CommentsSlice = createSlice<CommentState>({
    name:"comments",
    initialState,
    reducers:{},
    extraReducers:(builder) => {
        builder.addCase(postComment.pending,(state) => {
            state.commentLoading = true;
            state.commentError = false;
        });
        builder.addCase(postComment.fulfilled,(state) => {
            state.commentLoading = false;
        });
        builder.addCase(postComment.rejected,(state) => {
            state.commentLoading = false;
            state.commentError = true;
        });

        builder.addCase(getComments.pending,(state) => {
            state.commentLoading = true;
            state.commentError = false;
        });
        builder.addCase(getComments.fulfilled,(state,{payload:comments}) => {
            state.commentLoading = false;
            state.comments = comments
        });
        builder.addCase(getComments.rejected,(state) => {
            state.commentLoading = false;
            state.commentError = true;
        });


    },
});

export const CommentsReducer = CommentsSlice.reducer;
export const commentsState = (state:RootState) => state.comments.comments;
export const commentsLoading = (state:RootState) => state.comments.commentLoading;
