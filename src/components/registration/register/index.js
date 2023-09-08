import React from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useDispatch, useSelector} from "react-redux";
import { setUser } from "../../../redux/slices/userSlice";
import { FormRegister } from "../form-register";
import {useNavigate} from "react-router-dom";
import { setUserDoc} from "../../../redux/slices/userSlice";
import { useEffect } from "react";
import { useAuth } from './../../../hooks/auth';
import { userRegister } from "../../../redux/actions/userActions";
import { registerUser } from "../../../firebase";


export const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const {isAuth} = useAuth();
  // console.log('register auth',isAuth)



  useEffect(()=> {
    if(isAuth){
      navigate('/');
    }
  },[isAuth])

  // const handleRegister  =( email,password) =>{
  //   // const auth = getAuth();
  //   console.log(auth)
  //   createUserWithEmailAndPassword(auth, email,password)
  //     .then(({user}) => {
  //       console.log(user)
  //       dispatch(setUser({
  //         email:user.email,
  //         id: user.uid,
  //         token:user.accessToken,          
  //       }));
  //       // navigate('/');
  //       console.log(user)
  //     alert('Successful registration')

  //     })
  //     .catch(console.error)

      
  // } 
  //     const userRegister = createAsyncThunk(
  //   'user/register',
  //     async(email, {dispatch}) => {
        
  //     console.log('userRegister',email)
      
  //     const {user} = await registerUser(email);
  //     const userData = {
  //         email: user.email,
  //         id: user.uid
  //     };
  
  //     const userDoc = await getUserDoc(userData);
  //         dispatch(setUser(userDoc));
  //         return userData;
  // }
  // ); 



  const handleRegister  = (name,email,password) =>{
    // e.preventDefault();
    console.log('ok')
    console.log(email)
    console.log(password)
    console.log(name)
    dispatch(userRegister({name,email,password}))
    
  } 
  // console.log(isAuth,'isAuth register')
  
  return(
      <FormRegister
            title='Зарегистрироваться'
            handleClick={handleRegister}
            />
  )
}