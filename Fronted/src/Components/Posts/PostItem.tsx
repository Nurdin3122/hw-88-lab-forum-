import React from 'react';
import {apiUrl} from "../../AxiosApi/BaseUrl.ts";
import imageNotAvailable from "../../assets/images/imageNotAvailab.jpg"
import "./postsItem.css"

interface Props {
    _id:string;
    user:string;
    title:string;
    description:string;
    image:string;
    createdAt:string;
}

const PostItem:React.FC<Props> = ({id,title,description,image,user,createdAt}) => {
    let cardImage = imageNotAvailable
    if (image) {
        cardImage = apiUrl + "/" + image;
    }

    return (
        <div className="d-flex flex-wrap m-3 border align-items-center">
            <div className="d-flex">
                <img className="image img-fluid" src={`${cardImage}`} alt={title}/>
            </div>


            <div className="m-3 d-flex flex-column p-3">
            <span className="m1 text-truncate">
                {createdAt}
                <span className="ms-3">by {user}</span>
            </span>


                <div className="mt-auto mb-auto">
                    <h5 className="m-1 text-break ">{title}</h5>
                    <h6 className="m-1 text-break">{description}</h6>
                </div>
            </div>


        </div>
    );
};

export default PostItem;