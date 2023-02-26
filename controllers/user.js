import * as userLibrary from "../library/user.js";


export const register = async (req, res) => {
  const libRes = await userLibrary.register(req.body);

  if(libRes.status){
    return res.status(200).json(libRes.data);
  }else{
    return res.status(400).json({"Registration faild" : libRes.message});
  }
}

export const login = (req, res) => {
  res.json({type: 'login'})
}

export const logout = (req, res) => {
  res.json({type: 'logout'})
}