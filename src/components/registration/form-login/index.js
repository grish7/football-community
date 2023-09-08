import React from "react";
import { Menu } from "../../menu";
import {Wrapper, WrapImage,WrapInput,WrapSvg,NavLink, WrapText,WrapBlock} from './index.styles';
import Email from '../../../assets/at-sign4.png';
import Password from '../../../assets/password.png';
import { Button } from "../../button"; 
import { Input } from "../../input";
import Close from '../../../assets/close.png';
import { Alert } from "../../alert";
import { useDispatch} from "react-redux";
import { useInput } from "../../../hooks/input";



export const FormLogin = ({title, handleClick}) => {   

    const email= useInput('',{
                              isEmpty:true, 
                              minLength: 8, 
                            })
    const password = useInput('', {
                                    isEmpty: true, 
                                    minLength:6, 
                                    maxLength:10
                                  })

    const dispatch = useDispatch();


const resultError =((email.isDirty && email.isEmpty) && <Alert >поле не должно быть пустым</Alert>) 
|| 
((email.isDirty && email.minLengthError) && <Alert>некорректная длина </Alert>)



const resultErrorPassword = ((password.isDirty && password.isEmpty) && <Alert>поле не должно быть пустым</Alert>)
|| 
((password.isDirty && password.minLengthError) && <Alert>Недостаточное количество символов </Alert>) 
||
((password.isDirty && password.maxLengthError) && <Alert>Превышающее количество символов </Alert>)




  return(
  <Wrapper>
      <Menu/> 
      <WrapText>
          <h1>Авторизация</h1>                   
      </WrapText>        
      <WrapBlock>
          { !email.inputValid &&  resultError }
          <WrapInput>              
            <WrapImage src={Email}/>    
            
            <Input 
                  view='login'
                  type='text'
                  name='email'
                  placeholder='email'
                  value={email.value}
                  onChange={(e) => email.onChange(e)}
                  onBlur={(e) => email.onBlur(e)}
                  
                  />

            <WrapSvg src={Close} onClick={()=> email.setValue('')}/>
          </WrapInput>

          { !password.inputValid &&  resultErrorPassword }

          <WrapInput>
          <WrapImage src={Password}/>    

            <Input                   
                  view='login'
                  type='password'
                  placeholder='password' 
                  value={password.value} 
                  onChange={e => password.onChange(e)}
                  onBlur={e => password.onBlur(e)}                 
                  />


            <WrapSvg src={Close} onClick={() => password.setValue('')} />            
          </WrapInput>    

          <NavLink to='/'>
            <Button view='login'
                    onClick={() =>handleClick(email.value, password.value)}
                    disabled={!email.inputValid || !password.inputValid} 
                    type='submit'
                    >          
            {title}
            
          </Button>
          </NavLink>
          <NavLink to='/register'><Button view='login'>Зарегистрироваться</Button></NavLink> 
      </WrapBlock>     
  </Wrapper> 
)
}


