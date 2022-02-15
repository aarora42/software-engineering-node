import express from 'express';
import UserController from "./software-engineering-react/src/controllers/UserController";
import TuitController from "./software-engineering-react/src/controllers/TuitController";
import TuitDao from "./software-engineering-react/src/daos/TuitDao"
import UserDao from "./software-engineering-react/src/daos/UserDao"
import mongoose from "mongoose";


//mongo connection
//connect heroku
mongoose.connect('mongodb+srv://anusha:fsePass@cluster0.lbwnn.mongodb.net/tuiter?retryWrites=true&w=majority').then(() => {
    console.log("Connected to DB");
});
const app = express();
app.use(express.json());


app.get('/hello', (req, res) =>
    res.send('Hello World!'));

app.get('/add/:a/:b', (req, res) => {
    res.send(req.params.a + req.params.b);
})
const userController = new UserController(app, new UserDao());
const tuitController = new TuitController(app, new TuitDao());


const PORT = 4000;
app.listen(process.env.PORT || PORT);