import React from 'react';

interface Props {
    _id:string;
    comment:string;
    post:string;
    user:string;
}

const CommentItem:React.FC<Props> = ({_id,comment,post,user}) => {
    return (
        <div className="border m-3 d-flex p-2">
            <div>
                <span>{user}:  <span className="ps-4">   {comment} </span></span>
            </div>
        </div>
    );
};

export default CommentItem;