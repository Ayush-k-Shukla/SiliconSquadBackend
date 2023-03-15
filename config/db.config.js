import dotenv from "dotenv";
dotenv.config({ path: './.env.production' });

export const dbConfig = {
  url : process.env.MONGO_URL, 
  options : {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
} 