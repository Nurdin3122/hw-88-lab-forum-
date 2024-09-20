export interface User {
    _id:string;
    username:string;
    token:string;
}

export interface UserMutation {
    username:string;
    password:string;
}

export interface Post {
    _id:string;
    title:string;
    description:string;
    image:string | null,
    user:string;
}

export interface PostMutation {
    title:string;
    description:string;
    image:string ,
}