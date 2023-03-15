
import user from "./user.js";

const setRoute = (app) => {

  app.get("/", (req, res) => {
    res.send("I am working hard to make this project a success, hope you are also doing same!")
  })

  app.use("/user", user)

  
}

export {setRoute};