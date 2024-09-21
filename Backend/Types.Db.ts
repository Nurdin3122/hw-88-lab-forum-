export interface UserFields {
    username: string;
    password: string;
    token?: string;
}

export interface Post {
    title:string;
    description:string;
    image:string | null;
    user:string;
}