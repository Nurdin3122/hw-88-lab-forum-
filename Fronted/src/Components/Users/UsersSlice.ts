import {User} from "../../../Types.ts";
import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "../../app/store.ts";
import {userCheckPostRequest} from "./UsersThunks.ts";

export interface UserState {
    user:User | null;
    usersLoading:boolean;
    usersError:boolean;
}

export const initialState:UserState = {
    user:null,
    usersLoading:false,
    usersError:false,
}

export const UserSLice = createSlice<UserState>({
    name:"user",
    initialState,
    reducers: {
            unsetUser: (state) => {
                state.user = null;
            }
    },
    extraReducers:(builder) => {
      builder.addCase(userCheckPostRequest.pending,(state) => {
          state.usersLoading = true;
          state.usersError = false;
      });
        builder.addCase(userCheckPostRequest.fulfilled,(state,{payload:user}) => {
            state.usersLoading = false;
            state.user = user;
        });
        builder.addCase(userCheckPostRequest.rejected,(state) => {
            state.usersLoading = false;
            state.usersError = true;
        });
    },
});

export const UserReducer = UserSLice.reducer;

export const userState = (state:RootState) => state.user.user;