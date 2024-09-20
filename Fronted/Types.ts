export interface User {
    _id:string;
    username:string;
    token:string;
}

export interface UserMutation {
    username:string;
    password:string;
}