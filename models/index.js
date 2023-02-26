import mongoose from "mongoose";
import { dbConfig } from "../config/db.config.js";

const mongoInit = async () => {  
  mongoose.set('strictQuery', false)
  try {
    await mongoose.connect(dbConfig.url, dbConfig.options)
  } catch(error) {
    console.log(`Unable to connect to mongoDB, here is ${error.message}`);
  }
}

export {mongoInit};