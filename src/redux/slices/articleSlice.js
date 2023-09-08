import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchArticles } from "../actions/articleActions";





const initialState = {  
  articles: [],   
  searchValue: '', 
  searchedArticles:[],   
  article: {},
  status:null,
  error:null,
  isLoading: false
};


const articleSlice = createSlice({
  name: 'article',
  initialState,  

reducers: { 
  setMoreInfo: (state, action) => {
    state.article = state.articles.filter(i => i.id === action.payload)
  },
  setSearchArticles:(state,action) =>{
    state.searchedArticles = [];
    state.searchedArticles.push(action.payload)
  },
  setSearchValue: (state, action) =>{
    state.searchValue = action.payload;   
    state.searchedArticles = state.articles.filter(obj => (obj.title.toLowerCase()).includes(action.payload.toLowerCase()))
  },
  setArticles : (state, action) => {
    state.articles = action.payload;
    state.isLoading = false;
  }
},

extraReducers:(builder) =>{
builder
.addCase(fetchArticles.pending,(state) =>{
  state.status = 'loading';
    state.error = null;
})
  .addCase(fetchArticles.fulfilled,(state,action) => {
    state.status = 'resolved';
    state.articles = action.payload;
})
  .addCase(fetchArticles.rejected,(state,action) => {
    state.status = 'rejected';
    state.error = action.payload;
})  
}
});


export const {setSearchArticles,setMoreInfo,setArticles, setSearchValue} = articleSlice.actions;
export default articleSlice.reducer;