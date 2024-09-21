import {createAsyncThunk} from "@reduxjs/toolkit";
import axiosApi from "../../AxiosApi/AxiosApi.ts";
import {Comment} from "../../../Types.ts";

export const getComments = createAsyncThunk<Comment[]>(
    "comments/getComments",
    async (id) => {
        const response = await axiosApi.get<Comment[] | null>(`/comments/${id}`);
        return response.data;
    }
);

export const postComment = createAsyncThunk<Comment>(
    "comments/postComment",
    async (comment) => {
        const user = localStorage.getItem('persist:form:user');
        const UserJsonParse = JSON.parse(user);
        const token = JSON.parse(UserJsonParse.user)
        if (!token) {
            throw new Error('User not authenticated');
        }

        const response = await axiosApi.post<Comment>("/comments",comment,{
            headers: {
                Authorization: `${token.token}`,
            }
        });
        return response.data
    }
);