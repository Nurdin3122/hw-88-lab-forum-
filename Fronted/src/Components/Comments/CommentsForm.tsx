import React, {useState} from 'react';
import {CommentMutation} from "../../../Types.ts";
import {useNavigate} from "react-router-dom";
import {useAppDispatch} from "../../app/hooks.ts";
import {postComment} from "./CommentsThunks.tsx";

interface Props {
    id:string
}

const CommentsForm:React.FC<Props> = ({id}) => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [newComment, setNewComment] = useState<CommentMutation>({
        comment:"",
        post:id,
    });

    const onSend = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            dispatch(postComment(newComment));
            navigate("/");
        } catch(error) {
            console.log(error);
        }
    };

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewComment((prev) => ({
            ...prev,
            [event.target.name]: event.target.value,
        }))
    };




    return (
        <div className="d-flex flex-column">
            <form onSubmit={onSend}>

                <h5 className="mt-5 d-flex justify-content-center">Comment</h5>
                <div className="input-group input-group-lg">
                    <input type="text"
                           className="form-control mt-5"
                           aria-label="Sizing example input"
                           aria-describedby="inputGroup-sizing-lg"
                           name="comment"
                           id="comment"
                           required
                           onChange={onChange}
                    />
                </div>


                <div className="d-flex justify-content-center">
                    <button type="submit" className="btn btn-danger mt-5 mb-5">Create</button>
                </div>


            </form>
        </div>
    );
};

export default CommentsForm;