import React, {useState} from "react";
import {MainLogo, WrapLink, WrapNick,WrapperRightBlock,  WrapLogo} from './index.styles';
import { Name } from '../../components/name/index.js';
import { Logo } from '../../components/logo/index.js';
import { useAuth } from "../../hooks/auth";
import { removeUser } from "../../redux/slices/userSlice";
import { useDispatch } from "react-redux";
import { Button } from "../button";
import Nick from '../../assets/person.png';
import NickOk from '../../assets/sign.png'



export const Menu = () => {
  const {isAuth,name} = useAuth();
  const dispatch = useDispatch();


  return(
    <>
      <MainLogo>
              <Name view='logo'>...YardBallers...</Name> 
              <WrapperRightBlock>
                <WrapLogo >
                  <Logo  img={ isAuth ? NickOk : Nick}/> 
                </WrapLogo>               
                {isAuth ? 
                ( 
                  <>
                    <WrapNick>
                      {name}
                    </WrapNick>
                    <WrapLink to='/'>
                      <Button  
                              view= 'logout' 
                              onClick={() => dispatch(removeUser())}
                              >
                        Выйти 
                      </Button>
                    </WrapLink>
                  </> 
                )
                  : 
                  (
                    <WrapLink to='/login'>
                        <Button view= 'logout'>Войти</Button>
                    </WrapLink>                                   
                )}
              </WrapperRightBlock>                 
      </MainLogo>  
    </>
  )
}