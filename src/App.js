import React from 'react';
import { MainPage } from './pages/main-page';
import { Routes, Route } from 'react-router-dom';
import { ErrorPage} from './pages/error-page';
import { HugeArticle } from './components/huge-article';
import { LoginPage } from './pages/login-page';
import { RegisterPage } from './pages/register-page';





  function App() {

    return(    
      <>              
            <Routes>        
              <Route path='/'  element={<MainPage/>}>                 
                <Route path='more-info'  element={<HugeArticle/>}/>               
              </Route>   
              <Route path='login'  element={<LoginPage/>}/>  
              <Route path='register'  element={<RegisterPage/>}/>
              <Route path='*'  element={<ErrorPage/>}/>
            </Routes>    
      </>
    )
}

export default App;
