import express from "express";
import User from "../models/Users";
import Comment from "../models/Comments";
import Posts from "../models/Posts";

const commentsRouter = express.Router();

commentsRouter.get("/:id",async (req,res) => {
    try {
        const id = req.params.id;
        const comments = await Comment.find({ post: id }).populate({
            path: 'user',
            select: 'username -_id'
        });
        return res.send(comments);
    } catch (error) {
        return res.status(400).send(error);
    }

});

commentsRouter.post("/", async (req,res) => {
    const token = req.get('Authorization');

    if (!token) {
        return res.status(401).send({error: 'No token present'});
    }

    const user = await User.findOne({token});
    if (!user) {
        return res.status(401).send({error: 'Wrong token!'});
    }

    if (!req.body.comment) {
        return res.status(400).send({error: 'comment is required'});
    }

    const post = await Posts.findById(req.body.post).populate({path: 'user', select: 'username -_id'});
    console.log(post)
    if (!post) {
        return res.status(404).send({ error: 'Post not found' });
    }

    const comment = new Comment({
        comment:req.body.comment,
        user:{
            _id: user._id,
        },
        post:{
            _id:post._id
        },
    });
    await comment.save();
    console.log(comment)
    return res.send(comment);
});

export default commentsRouter;