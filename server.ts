/**
 * @file Implements an Express Node HTTP server. Declares RESTful Web services
 * enabling CRUD operations on the following resources:
 * <ul>
 *     <li>users</li>
 *     <li>tuits</li>
 *     <li>likes</li>
 *     <li>follows</li>
 *     <li>bookmarks</li>
 *     <li>messages</li>
 * </ul>
 * Connects to a remote MongoDB instance hosted on the Atlas cloud database
 * service
 */

import express from 'express';
import UserController from "./controllers/UserController";
import TuitController from "./controllers/TuitController";
import TuitDao from "./daos/TuitDao";
import UserDao from "./daos/UserDao";
import mongoose from "mongoose";
import LikeController from "./controllers/LikeController";
import FollowController from "./controllers/FollowController";
import BookmarkController from "./controllers/BookmarkController";
import MessageController from "./controllers/MessageController";
import AuthenticationController from "./controllers/auth-controller";
var cors = require('cors')
const session = require("express-session");
const app = express();

app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'

}));
//mongo connection
mongoose.connect('mongodb+srv://anusha:fsePass@cluster0.lbwnn.mongodb.net/tuiter?retryWrites=true&w=majority').then(() => {
    console.log("Connected to DB");
});


app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", 'http://localhost:3000');
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});




let sess = {
    secret: process.env.SECRET,
    proxy: true,
    cookie: {
        secure: false,
        sameSite: 'none'
    }
}

if (process.env.ENV === 'PRODUCTION') {
    app.set('trust proxy', 1) // trust first proxy
    sess.cookie.secure = true // serve secure cookies
}
app.use(express.json());


app.get('/hello', (req, res) =>
    res.send('Hello World!'));

app.get('/add/:a/:b', (req, res) => {
    res.send(req.params.a + req.params.b);
})
const userController = UserController.getInstance(app);
const tuitController = TuitController.getInstance(app);
const likeController = LikeController.getInstance(app);
const followController = FollowController.getInstance(app);
const bookmarkController = BookmarkController.getInstance(app);
const messageController = MessageController.getInstance(app);
AuthenticationController(app);







const PORT = 4000;
app.listen(process.env.PORT || PORT);