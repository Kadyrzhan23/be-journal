import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import routes from "./routes/index.js";
import {errorHandler} from "./middleware/errorHandler.js";
import {errors} from "celebrate"
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/",routes)
app.use(errors())
// app.use(errorHandler);



export default app;