import React, {useCallback } from "react";
import { Input } from "../input";
import { Wrapper,WrapImg, WrapSvg } from "./index.styles";
import LogoSearch from '../../assets/search.png'
import Close from '../../assets/close.png'
import debounce from "lodash.debounce";
import { useSelector, useDispatch } from "react-redux";
import { setSearchValue } from "../../redux/slices/articleSlice";

export const Search = () =>{
  const searchValue = useSelector(state => state.article.searchValue);

  const dispatch = useDispatch();

  const onClickClear = () =>{
    dispatch(setSearchValue(''));  
  }

  const updateTest = useCallback( debounce((val) =>{
    dispatch(setSearchValue(val));
  },1000),[])

  const onChangeInput = (e) =>{
    dispatch(setSearchValue(e.target.value))
    updateTest(e.target.value)
  }


  return(
    <Wrapper>
      <WrapImg src={LogoSearch}/>
      <Input 
              view='search'
              placeholder = 'поиск'
              value={searchValue}
              onChange={onChangeInput}
              ref={null}
      />
      {searchValue && (
        <WrapSvg src={Close} onClick={onClickClear}/>
      )}
    </Wrapper>
  )
}