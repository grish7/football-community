import { createSlice } from "@reduxjs/toolkit";
import { userRegister, userLogin } from "../actions/userActions";



const initialState = { 
    email:null,
    token: null,
    id:null,
    name:null,
    isLoading: false,
    error:null,
  
}

const userSlice = createSlice({
  name:'user',
  initialState,
  reducers: {  
    removeUser (state, action){
      state.email = null;
      state.id = null;
      state.token = null;
      state.name = null;
    },
    setUser (state, action) {     
     
      state.email = action.payload.email;  
      state.id = action.payload.id;
      state.token = action.payload.token;
      state.name = action.payload.name;
    }, 
    setUserName (state, action) {
      state.name = action.payload;
    }  
},
  extraReducers: (builder) => {
    builder
    .addCase(userRegister.fulfilled,(state,action)=>{
      state.isLoading = false;   
    })
    .addCase(userRegister.pending,(state,action)=>{
      state.isLoading = true;
      state.error = null;
    })
    .addCase(userRegister.rejected,(state,action)=>{
      state.isLoading = false;
      state.error = action.payload;
    })
    .addCase(userLogin.fulfilled,(state, action)=>{
      state.isLoading = false;
    })
    .addCase(userLogin.pending,(state,action)=>{
      state.isLoading = true;
    })
    .addCase(userLogin.rejected,(state,action)=>{
      state.isLoading = false;
    })
  }
})


export const {setUser,removeUser, setUserName} = userSlice.actions;
export default userSlice.reducer;


