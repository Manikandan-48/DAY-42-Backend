import * as dotenv from 'dotenv';
import cors from "cors";

import express from "express";
import mongoose from 'mongoose';

import { getToDoRoute, deleteToDoRoute, saveToDoRoute, updateToDoRoute } from './routes/ToDoRoute.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT;


mongoose
    .connect(process.env.MONGO_URL, { useNewUrlParser: true })

    .then(() => console.log("Mongoose is connected👍"))
    .catch((err) => console.log(err));


app.use(express.json());
app.use(cors());



app.get("/", (req, res) => {
    res.send("This backend Application is Running Successfully🎉🎆")
})


app.use("/",getToDoRoute);
app.use("/",saveToDoRoute);
app.use("/",deleteToDoRoute);
app.use("/",updateToDoRoute);



app.listen(PORT, () => console.log("The Server is connected in🎯🎈", PORT))
