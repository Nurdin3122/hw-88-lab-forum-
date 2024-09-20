import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {UserReducer} from "../Components/Users/UsersSlice.ts";
import storage from "redux-persist/lib/storage";
import {FLUSH,PAUSE,PERSIST,PURGE,REGISTER,REHYDRATE,persistReducer,persistStore} from "redux-persist";
import {PostsReducer} from "../Components/Posts/PostsSlice.ts";

const usersPersistConfig = {
    key: 'form:user',
    storage,
    whitelist: ['user'],
};

const rootReducer = combineReducers({
    posts:PostsReducer,
    user: persistReducer(usersPersistConfig, UserReducer),
});



export const store = configureStore({
    reducer:rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;