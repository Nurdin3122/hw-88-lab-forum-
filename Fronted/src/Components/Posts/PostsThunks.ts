import {createAsyncThunk} from "@reduxjs/toolkit";
import axiosApi from "../../AxiosApi/AxiosApi.ts";
import {Post, PostMutation} from "../../../Types.ts";

export const getPostsRequest = createAsyncThunk<Post[]>(
    "posts/getPostRequest",
    async () => {
        const user = localStorage.getItem('persist:form:user');
        const UserJsonParse = JSON.parse(user);
        const token = JSON.parse(UserJsonParse.user)
        if (!token) {
            throw new Error('User not authenticated');
        }

        const response = await axiosApi.get<Post[] | null>("/posts",{
            headers: {
                Authorization: `${token.token}`,
            }
        });
        return response.data
    }
)

export const postsPostRequest = createAsyncThunk(
    "posts/postsPostRequest",
    async (posts) => {

        const user = localStorage.getItem('persist:form:user');
        const UserJsonParse = JSON.parse(user);
        const token = JSON.parse(UserJsonParse.user)
        if (!token) {
            throw new Error('User not authenticated');
        }

        const formData = new FormData();
        const keys = Object.keys(posts) as (keyof PostMutation)[];
        keys.forEach(key => {
            const value = posts[key];
            formData.append(key, value);
        });

        const response = await axiosApi.post("/posts",formData,{
            headers: {
                Authorization: `${token.token}`,
            }
        });
        return response.data
    }
);