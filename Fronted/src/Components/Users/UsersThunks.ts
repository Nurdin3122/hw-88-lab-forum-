import {createAsyncThunk} from "@reduxjs/toolkit";
import {User, UserMutation} from "../../../Types.ts";
import axiosApi from "../../AxiosApi/AxiosApi.ts";

export const userPostRequest = createAsyncThunk(
    "user/userPostRequest",
    async (userState) => {
        const response = await axiosApi.post<UserMutation>("/users",userState);
        return response.data

    }
);

export const userCheckPostRequest = createAsyncThunk<User>(
    "user/userCheckPostRequest",
    async (userState) => {
        const response = await axiosApi.post<UserMutation>("/users/sessions",userState);
        return response.data
    }
);