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
    createdAt:string;
}

export interface PostMutation {
    title:string;
    description:string;
    image:string ,
}

export interface Comment {
    _id:string;
    user:string;
    post:string;
    comment:string
}

export interface CommentMutation {
    post:string;
    comment:string;
}