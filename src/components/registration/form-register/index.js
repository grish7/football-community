
import React from "react";
import { Menu } from "../../menu";
import {Wrapper, WrapImage,WrapInput,WrapSvg,NavLink,WrapBtn,NavLinkSign,WrapTextLink, WrapText,WrapBlock} from './index.styles';
import Email from '../../../assets/at-sign4.png';
import Password from '../../../assets/password.png';
import { Button } from "../../button"; 
import { Input } from "../../input";
import Close from '../../../assets/close.png';
import Nick from '../../../assets/person.png';
import { useInput } from "../../../hooks/input";
import { Alert } from "../../alert";




export const FormRegister = ({title, handleClick}) => {
  const email = useInput('',{isEmpty:true, minLength: 9})
    const password = useInput('', {isEmpty: true, minLength:6, maxLength:10})
    const name = useInput('', {isEmpty: true, minLength:5, maxLength:17})


  const resultError =(
    (email.isDirty && email.isEmpty) && <Alert >поле не должно быть пустым</Alert>) 
    || 
    ((email.isDirty && email.minLengthError) && <Alert>некорректная длина </Alert>)
   
    
const resultErrorPassword = (
  (password.isDirty && password.isEmpty) && <Alert>поле не должно быть пустым</Alert>) 
  || 
  ((password.isDirty && password.minLengthError) && <Alert>Недостаточное количество символов </Alert>) 
  ||   
  ((password.isDirty && password.maxLengthError) && <Alert>Превышающее количество символов </Alert>)


  return(
    <Wrapper>
        <Menu/> 
        <WrapText>
          <h1>Регистрация</h1>          
        </WrapText>
        <WrapBlock>
              { !name.inputValid &&  resultError }
            <WrapInput>  
                <WrapImage src={Nick}/>             
                <Input 
                      view='login'
                      type='text'
                      placeholder = 'Name'
                      value={name.value}
                      onChange={(e) => name.onChange(e)}
                      onBlur={(e) => name.onBlur(e)}                            
                      />
                <WrapSvg src={Close} onClick={()=> name.setValue('')}/>
              </WrapInput>


              { !email.inputValid &&  resultError }
            <WrapInput>  
              <WrapImage src={Email}/>             
              <Input 
                  view='login'
                  type='email'
                  value={email.value}
                  onChange={(e) => email.onChange(e)}
                  onBlur={(e) => email.onBlur(e)}
                  placeholder='email'
                  
                  />
              <WrapSvg src={Close} onClick={()=> email.setValue('')}/>
            </WrapInput>

              { !password.inputValid &&  resultErrorPassword }

            <WrapInput>
              <WrapImage src={Password}/>             
              <Input                   
                  view='login'
                  type='password'
                  value={password.value}
                  onChange={e => password.onChange(e)}
                  onBlur={e => password.onBlur(e)}   
                  placeholder='password'                  
                  />
              <WrapSvg src={Close} onClick={()=> password.setValue('')}/>            
            </WrapInput>
            <NavLinkSign to='/'>            
              <Button 
                    view='login'
                    onClick={() =>handleClick(name.value,email.value, password.value)}
                    disabled={!email.inputValid || !password.inputValid} 
                    >          
                    {title}
              </Button>
            </ NavLinkSign>
              <NavLink to='/login'><WrapTextLink> {`<- назад`}</WrapTextLink></NavLink> 
        </WrapBlock>
    </Wrapper> 
  )
}