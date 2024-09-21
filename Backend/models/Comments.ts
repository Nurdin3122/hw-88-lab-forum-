import mongoose from "mongoose";
const Schema = mongoose.Schema;

const CommentsSchema = new Schema({
    user: {
        type:Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
    post: {
        type:Schema.Types.ObjectId,
        ref:"Posts",
        required:true,
    },
    comment: {
        type:String,
        required:true,
    },
});

const Comment = mongoose.model("Comment",CommentsSchema);
export default Comment;
