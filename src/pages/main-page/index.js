import React from 'react';
import {ContentWrapper, WrapperMainPage} from './index.styles.js';
import { Menu } from '../../components/menu/index.js';
import { ArticleList } from '../../components/article-list/index.js';
import { Outlet } from "react-router-dom";
import { useAuth } from '../../hooks/auth.js';
import { Preloader } from '../../components/preloader/index.js';
import { LoginPage } from './../login-page/index';



export const MainPage = ( ) => {
const {isAuth,isLoading} = useAuth();




return (
    <>
    { isLoading && <Preloader/>}
    {isAuth ? (
   <WrapperMainPage>
        <ContentWrapper> 
            <Menu/> 
            <Outlet/>                
            <ArticleList />           
        </ContentWrapper>        
    </WrapperMainPage>  
     )
     :(
    <LoginPage/>
    )}
    </>
)
};

