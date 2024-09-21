import {createAsyncThunk} from "@reduxjs/toolkit";
import {User, UserMutation} from "../../../Types.ts";
import axiosApi from "../../AxiosApi/AxiosApi.ts";
import {unsetUser} from "./UsersSlice.ts";

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

export const logout = createAsyncThunk<void,void>(
    'users/logout',
    async (_, { dispatch}) => {
        const user = localStorage.getItem('persist:form:user');
        const UserJsonParse = JSON.parse(user);
        const token = JSON.parse(UserJsonParse.user)
        if (!token) {
            throw new Error('User not authenticated');
        }
        await axiosApi.delete('/users/sessions', {
            headers: {
                Authorization: `${token.token}`,
            }
        });
        dispatch(unsetUser());

    }
);