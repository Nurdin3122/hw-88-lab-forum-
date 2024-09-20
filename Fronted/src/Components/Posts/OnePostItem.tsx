import React from 'react';
import imageNotAvailable from "../../assets/images/imageNotAvailab.jpg";
import {apiUrl} from "../../AxiosApi/BaseUrl.ts";

interface Props {
    _id:string;
    user:string;
    title:string;
    description:string;
    image:string;
    createdAt:string;
}

const OnePostItem:React.FC<Props> = ({_id,title,description,image,user,createdAt}) => {
    let cardImage = imageNotAvailable;
    if (image) {
        cardImage = apiUrl + "/" + image;
    }

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
                    <h5 className="mt-2 text-break ">{title}</h5>
                    <h5 className="mt-2 mb-3 text-break ">{description}</h5>
                </div>
            </div>
        </div>
    );
};

export default OnePostItem;