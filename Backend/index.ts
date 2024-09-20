import mongoose from 'mongoose';
import config from "./multer/config";
import express from 'express';
import cors from 'cors';
import usersRouter from "./routers/usersRouter";
import postsRouter from "./routers/postsRputer";



const app = express();
const port = 8030;


app.use(express.static('public'));
app.use(cors());
app.use(express.json());
app.use('/users',usersRouter);
app.use("/posts", postsRouter);

const run = async () => {
    await mongoose.connect(config.db);
    app.listen(port, () => {
        console.log(`Server started on ${port} port!`);
    });
    process.on('exit', () => {
        mongoose.disconnect();
    });
};
run().catch(console.error);