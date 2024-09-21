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
    createdAt: {
        type: Date,
        default: Date.now
    },
})

const Posts = mongoose.model("Posts",PostsSchema)
export default Posts;