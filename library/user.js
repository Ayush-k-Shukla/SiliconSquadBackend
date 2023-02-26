import {User} from "../models/User.js";


export const register = async (data) => {
  const result = {status: true};

  try {

    //todo: code to create new user
    const newUser = new User(data);
    
    const resultData = await newUser.save()

    result.data = resultData;
  } catch(error) {
    result.status = false;
    result.message = error.message;
  }

  return result;
}


export const login = async (data) => {
  const result = {status: true};

  try {

    //todo: code for login user


    //return all data

  } catch(error) {
    result.status = false;
    result.message = error.message;
  }

  return result;
}

export const logout = async (data) => {
  const result = {status: true};

  try {

    //todo: code for logout


  } catch(error) {
    result.status = false;
    result.message = error.message;
  }

  return result;
}