import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {useNavigate} from "react-router-dom";




export const signIn = createAsyncThunk("signIn", async (body , thunkAPI) => {
  const {rejectWithValue}=thunkAPI;

  try{

  const res = await fetch("https://192.168.43.32:7042/api/Auth/token", {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(body),
  });
  const data = await res.json();
  return data;
}
catch (error){
  return rejectWithValue(error.message);  

}
});

// const token = localStorage.getItem('token')
//   ? localStorage.getItem('token')
//   : null

const initialState = {
  // message: " ",
  // userInfo :null,
  // username: " ",
  // token ,
  // isLoding: false,
  // error: false,
  // isAuthenticated :false,
  // isSuccess: false,
  // roles : []
  // user: " ",
  token:" ",
  isAuthenticated : false,
   roles : [],
   expiresOn : "" , 
      message: " ",



};

const signinSlice = createSlice({

  name: "user",
  initialState,
  reducer: {
    addToken: (state, action) => {
     state.token = localStorage.getItem("token");
 
    },

    // addUser: (state, action) => {
    //         state.user = localStorage.getItem("user");
    //       },
      
},
  extraReducers: {
    [signIn.pending]: (state, action) => {
      // state.isLoding = true;
      // state.error = null;
    },
    [signIn.fulfilled]: (state, { payload : {user, token , roles}}) => {
      state.user=user;
state.isAuthenticated =true;
state.token= token;
state.roles =roles;
// localStorage.setItem("user",JSON.stringify(user))

localStorage.setItem("token",JSON.stringify(token))


     

      // state.isLoding = false;
      // state.userInfo = payload;
      // state.token = payload.token;
      // state.roles=payload;


        
      },
    
    [signIn.rejected]: (state, action) => {
      // state.isLoding = false;
      // state.error = action.payload;
      state.isAuthenticated=action.payload;
      state.token=false

    },
  },
});
export const  {addToken} = signinSlice.actions;
export default signinSlice.reducer;
