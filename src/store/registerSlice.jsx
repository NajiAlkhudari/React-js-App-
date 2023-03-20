import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";




export const getReg = createAsyncThunk('Register/getReg', async (_, thunkAPI)=>{
  const {rejectWithValue}=thunkAPI;
try{
const response = await axios.get("https://192.168.43.32:7042/api/AuthValues");
return response.data;
}
catch(error){
return rejectWithValue( error.message) ;  

}} );




export const insertReg=createAsyncThunk('Register/insertReg', async(subData,thunkAPI)=>{
  const {rejectWithValue}=thunkAPI;
try{
const res=await fetch('https://192.168.43.32:7042/api/Auth/register',{
  method:'POST',
  body :JSON.stringify(subData),

  headers :{
    'Content-type': 'application/json; charset=utf-8'
  } 
  
}

);
 const data=await res.json();
  return data;
} catch(error){
  return rejectWithValue(error.message);  
}
});


/////////////////////



export const deleteReg=createAsyncThunk('Register/deleteReg', async(id, thunkAPI)=>{
  const {rejectWithValue }=thunkAPI;
  try{
      await fetch(`https://192.168.43.32:7042/api/AuthValues/${id}`,{
      method:'DELETE',
      headers :{
          'Content-type': 'application/json; charset=utf-8    '
      }
  });
      return id;
  } catch(error){
      return rejectWithValue(error.message);  
  }
})







const registerSlice = createSlice({
            name: 'Register',
            initialState: { registers :[] , isLoding:false, error:null},
            reducers: {
              // standard reducer logic, with auto-generated action types per reducer
            },
            extraReducers: 
             {

              [getReg.pending]:(state,action)=>
              {
                         state.isLoding=true;
                         state.registers=action.payload;
                         state.error=null;
             
                     },  
                     [getReg.fulfilled]:(state, action)=>{
                         state.isLoding=false;
                         state.registers=action.payload;
             
                     },  [getReg.rejected]:(state, action)=>{
                         state.isLoding=false;
                         state.error=action.payload;
                     },




                       
                                [insertReg.pending]:(state, action)=>{
                                  state.isLoding=true;
                                  state.error=null;
                              },
                              [insertReg.fulfilled]:(state, action)=>{
                                  state.isLoding=false;
                                  state.registers.push(action.payload);
                      
                              },
                              [insertReg.rejected]:(state, action)=>{
                                  state.isLoding=false;
                                  state.error=action.payload;
                              },

                              [deleteReg.pending]:(state, action)=>{
                                state.isLoding=true;
                                state.error=null;
                            },
                            [deleteReg.fulfilled]:(state, action)=>{
                                state.isLoding=false;
                                state.registers=state.registers.filter((el)=>el.id !== action.payload);
                      
                            },
                            [deleteReg.rejected]:(state, action)=>{
                                state.isLoding=false;
                                state.error=action.payload;
                            },
    },
                        }
                       
                     )
                     //return final state

                            
    export default registerSlice.reducer;
