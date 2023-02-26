import dotenv from "dotenv";
import express from "express";
import cors from "cors";

import {mongoInit} from "./models/index.js";
import {setRoute} from "./routes/index.js";

dotenv.config({ path: './.env.production' });

const app = express();
app.use(cors());
app.use(express.json());


mongoInit()
setRoute(app);


app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`)
})