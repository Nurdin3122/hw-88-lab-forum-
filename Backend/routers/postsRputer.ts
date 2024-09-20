import express from "express";
import {imagesUpload} from "../multer/multer";
import User from "../models/Users";
import Posts from "../models/Posts";

const postsRouter = express.Router()

postsRouter.post("/", imagesUpload.single('image'),async (req,res) => {
    const token = req.get('Authorization');
    if (!token) {
        return res.status(401).send({error: 'No token present'});
    }

    const user = await User.findOne({token});
    if (!user) {
        return res.status(401).send({error: 'Wrong token!'});
    }

    if (!req.body.title) {
        return res.status(400).send({error: 'title is required'});
    }
    if (!req.body.description && !req.body.image) {
        return res.status(400).send({
            error: 'you need to fill in the required description or image'
        });
    }

        const Post= new Posts({
            title:req.body.title,
            description:req.body.description,
            image:req.file ? req.file.filename : null,
            user:user,
        });

    try {
        await Post.save();
        console.log(Post)
        return res.status(201).send(Post);
    } catch (error) {
        return res.status(400).send(error);
    }
});

export default postsRouter;