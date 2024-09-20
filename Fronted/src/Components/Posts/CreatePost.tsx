import React, {useState} from 'react';
import {PostMutation} from "../../../Types.ts";
import {useAppDispatch} from "../../app/hooks.ts";
import {useNavigate} from "react-router-dom";
import FormForFiles from "../FormForFiles/FormForFiles.tsx";
import {postsPostRequest} from "./PostsThunks.ts";

const emptyState:PostMutation =  {
    title:"",
    description:"",
    image:"",
}

const CreatePost = () => {
    const navigate = useNavigate();
    const [newPost, setNewPost] = useState<PostMutation>(emptyState);
    const dispatch = useAppDispatch();



    const onSend = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await dispatch(postsPostRequest(newPost));
            navigate('/');
        } catch(error) {
            console.log(error);
        }
    };


    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewPost((prev) => ({
            ...prev,
            [event.target.name]: event.target.value,
        }))
    };


    const fileInputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, files} = e.target;
        if (files) {
            setNewPost(prevState => ({
                ...prevState, [name]: files[0]
            }));
        }
    };

    return (
        <div className="d-flex flex-column">
            <h3 className="mt-5 d-flex justify-content-center">Create Post</h3>
            <form onSubmit={onSend}>

                <h5 className="mt-5 d-flex justify-content-center">Title</h5>
                <div className="input-group input-group-lg">
                    <input type="text"
                           required
                           className="form-control mt-5"
                           aria-label="Sizing example input"
                           aria-describedby="inputGroup-sizing-lg"
                           name="title"
                           id="title"
                           onChange={onChange}
                    />
                </div>

                <h5 className="mt-5 d-flex justify-content-center">Description</h5>
                <div className="input-group input-group-lg">
                    <input type="text"
                           className="form-control mt-5"
                           aria-label="Sizing example input"
                           aria-describedby="inputGroup-sizing-lg"
                           name="description"
                           id="description"
                           required
                           onChange={onChange}
                    />
                </div>
                <h5 className="mt-5 d-flex justify-content-center">Image</h5>
                <div className="mt-5 d-flex justify-content-center">
                    <div className="col-12 col-sm-6">
                        <FormForFiles
                            name="image"
                            onChange={fileInputChangeHandler}
                        />
                    </div>
                </div>


                <div className="d-flex justify-content-center">
                    <button type="submit" className="btn btn-danger mt-5 mb-5">Create</button>
                </div>


            </form>
        </div>
    );
};

export default CreatePost;