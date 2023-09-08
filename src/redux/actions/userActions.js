import { createAsyncThunk } from "@reduxjs/toolkit";
import { removeUser, setUser, setUserName } from "../slices/userSlice";
import {signIn,registerUser, logOut} from '../../firebase';
import { updateProfile } from "firebase/auth";
import { auth } from "../../firebase";




export const userRegister = createAsyncThunk(
  'user/register',
  async ({name,email, password}, {dispatch}) => {

      const {user} = await registerUser(email, password);
      const userData = {
          email: user.email,
          id: user.uid,
          name: user.displayName,
      };
      updateProfile(auth.currentUser, {
        displayName: name,
      })
      
      dispatch(setUser(userData));
      dispatch(setUserName (name))
  }
); 

export const userLogin = createAsyncThunk(
  'user/login',
  async ({email, password}, {dispatch}) => {

      const {user} = await signIn(email, password);

      const userAuthData = {
        email: user.email,
        id: user.uid,
        name: user.displayName
      };
    
      dispatch(setUser(userAuthData));

  }
); 

export const userLogout = createAsyncThunk(
  'user/logout',
  (_, {dispatch}) => {

      dispatch(removeUser())
  }
);

