import React from "react";
import { useDispatch} from "react-redux";
import { FormRegister } from "../../components/registration/form-register";
import {useNavigate} from "react-router-dom";
import { useEffect } from "react";
import { useAuth } from './../../hooks/auth';
import { userRegister } from "../../redux/actions/userActions";


export const RegisterPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const {isAuth} = useAuth();



  useEffect(()=> {
    if(isAuth){
      navigate('/');
    }
  },[isAuth])


  const handleRegister  = (name,email,password) =>{    
    dispatch(userRegister({name,email,password}))
    
  } 
  
  return(
      <FormRegister
            title='Зарегистрироваться'
            handleClick={handleRegister}
            />
  )
}