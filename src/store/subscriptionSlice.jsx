import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



export const getSub = createAsyncThunk('Subscription/getSub', async (_, thunkAPI)=>{
            const {rejectWithValue}=thunkAPI;
try{
  const response = await axios.get("");
  return response.data;
}
catch(error){
return rejectWithValue( error.message) ;  

}} );


export const insertSub=createAsyncThunk('Subscription/insertSub', async(subData,thunkAPI)=>{
  const {rejectWithValue}=thunkAPI;
try{
const res=await fetch('',{
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




export const editSub=createAsyncThunk('Subscription/editSub', async(id, data)=>{
  try{
    const res= await fetch(`/${id}`,{
       method:'PUT',
       headers :{
           'Content-type': 'application/json; charset=utf-8'
       }
      }
       )
       return res.data;
       

  
  } catch(error){
      console.log(error.message);  
  }});





export const deleteSub=createAsyncThunk('Subscription/deleteSub', async(id, thunkAPI)=>{
  const {rejectWithValue }=thunkAPI;
  try{
      await fetch(`/${id}`,{
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



const subscriptionSlice = createSlice({
            name: 'Subscription',
            initialState: { subscriptions :[] , isLoding:false, error:null},
            reducers: {
              // standard reducer logic, with auto-generated action types per reducer
            },
            extraReducers: 
             {
                         [getSub.pending]:(state,action)=>
                         {
                                    state.isLoding=true;
                                    state.subscriptions=action.payload;
                                    state.error=null;
                        
                                },  
                                [getSub.fulfilled]:(state, action)=>{
                                    state.isLoding=false;
                                    state.subscriptions=action.payload;
                        
                                },  [getSub.rejected]:(state, action)=>{
                                    state.isLoding=false;
                                    state.error=action.payload;
                                },
                                [insertSub.pending]:(state, action)=>{
                                  state.isLoding=true;
                                  state.error=null;
                              },
                              [insertSub.fulfilled]:(state, action)=>{
                                  state.isLoding=false;
                                  state.subscriptions.push(action.payload);
                      
                              },
                              [insertSub.rejected]:(state, action)=>{
                                  state.isLoding=false;
                                  state.error=action.payload;
                              },

                                 //deleteSub
        [deleteSub.pending]:(state, action)=>{
          state.isLoding=true;
          state.error=null;
      },
      [deleteSub.fulfilled]:(state, action)=>{
          state.isLoding=false;
          state.subscriptions=state.subscriptions.filter((el)=>el.subscriptionId !== action.payload);

      },
      [deleteSub.rejected]:(state, action)=>{
          state.isLoding=false;
          state.error=action.payload;
      },
      /////////////////////////////////////////////
      [editSub.pending]:(state, action)=>{
        state.isLoding=true;
        state.error=null;
    },   
      
      [editSub.fulfilled]:(state,action)=>{
         
        state.isLoding=false;
        state.subscriptions=state.subscriptions.filter((el)=>el.subscriptionId !== action.payload);
       
      
    
      
    },
      [editSub.rejected]:(state, action)=>{
        state.isLoding=false;
        state.error=action.payload; 
    },
//                          }
    },
                        }
                       
                     )
                     //return final state

                            
    export default subscriptionSlice.reducer;
