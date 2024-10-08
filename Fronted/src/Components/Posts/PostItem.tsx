import React from 'react';
import {apiUrl} from "../../AxiosApi/BaseUrl.ts";
import imageNotAvailable from "../../assets/images/imageNotAvailab.jpg"
import "./postsItem.css"
import {useNavigate} from "react-router-dom";

interface Props {
    _id:string;
    user:string;
    title:string;
    image:string;
    createdAt:string;
}

const PostItem:React.FC<Props> = ({_id,title,image,user,createdAt}) => {
    const navigate = useNavigate();
    let cardImage = imageNotAvailable;
    if (image) {
        cardImage = apiUrl + "/" + image;
    }
    const showOnePost = (id) => {
        navigate(`/one-post/${id}`)
    };



    return (
        <div className="d-flex flex-wrap m-3 border align-items-center">
            <div className="d-flex">
                <img className="image " src={`${cardImage}`} alt={title}/>
            </div>


            <div className="m-2 d-flex flex-column p-1 mb-auto">
                <div className="mb-4">
                      <span>
                                {createdAt}
                          <span className="ms-3">by {user}</span>
                       </span>
                </div>


                <div className="mb-5">
                    <h5 onClick={() => showOnePost(_id)} className="mt-2 mb-3 text-break ">{title}</h5>
                </div>
            </div>
        </div>
    );
};

export default PostItem;