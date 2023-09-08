import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchArticles = createAsyncThunk(
  'article/fetchArticles',
  async function(_,{rejectWithValue}){

      try{
          const response = await fetch('https://64d23033f8d60b1743619ac2.mockapi.io/articles' );
  
      if(!response.ok){
          throw new Error('Server error!')
      }
      const data = await response.json();
      return data;
      }catch(error){
          return rejectWithValue(error.message);
      }
  }
)
