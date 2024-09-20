import mongoose from "mongoose";
const Schema = mongoose.Schema;

const PostsSchema = new Schema({
    title: {
        type:String,
        required: true,
    },
    description: String,
    image: String,
    user: {
        type:Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
})

const Posts = mongoose.model("Post",PostsSchema)
export default Posts;