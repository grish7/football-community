import React, {useEffect} from "react";
import { useDispatch } from "react-redux";
import { useAuth } from "../../hooks/auth";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../../redux/actions/userActions";
import { FormLogin } from "../../components/registration/form-login";




export const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {isAuth} = useAuth();

  useEffect(()=> {
    if(isAuth){
      navigate('/');
    }
  },[isAuth])
  
  const handleLogin  = (email,password) =>{
  dispatch(userLogin({email,password}))
  }



  return (
    <>
    <FormLogin
      title='Войти'
      handleClick={handleLogin}
    />
    </>
  )
}