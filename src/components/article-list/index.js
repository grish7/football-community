import React ,{useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux";
import { WrapperTodoList,MainTitle,WrapTodo } from "./index.styles";
import { setMoreInfo} from "../../redux/slices/articleSlice";
import { Article } from "../article";
import { Search } from '../search';
import { Preloader } from '../preloader';
import { fetchArticles } from '../../redux/actions/articleActions';



export const ArticleList = () => { 
  const {status,articles, searchValue} = useSelector(state => state.article)
  const dispatch = useDispatch(); 


  useEffect(() =>{
    dispatch(fetchArticles())
  },[dispatch])


  const handleArticleDone = (id) => {
    dispatch(setMoreInfo(id));
  }

  const filteredArticles = articles.filter(obj => (obj.title.toLowerCase()).includes(searchValue.toLowerCase()))



  return(    
    <WrapperTodoList>
      <MainTitle> НОВОСТИ</MainTitle>
      <Search/>       
      <WrapTodo>
        {status === 'loading' && <Preloader/>}     
          { 
            filteredArticles.map(item => (
            <Article
                      key={item.id}            
                      title={ item.title}
                      description={item.description}
                      image={item.image}
                      id={item.id}  
                      onClickArticle={(id)=> handleArticleDone(id)}
                    />
            ) )}          
        {filteredArticles.length === 0 && <p>Нет статей</p>}             
      </WrapTodo>          
    </WrapperTodoList>  
  )
}


