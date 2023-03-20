import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'





export const getBus = createAsyncThunk('Bus/getBus', async(_,thunkAPI)=>{
    const {rejectWithValue}=thunkAPI;
try {
const response=await axios.get('');
return response.data;
}
catch(error)
{
    return rejectWithValue( error.message) ;  

}
});


export const insertBus =createAsyncThunk('Bus/insertBus', async(busData, thunkAPI)=>{
    const {rejectWithValue}=thunkAPI;
    try{
        const res=await fetch('',{
          method:'POST',
          body :JSON.stringify(busData),
        
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






        export const deleteBus=createAsyncThunk('Bus/deleteBus', async(id, thunkAPI)=>{
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
          



const busSlice= createSlice({      
    name: 'Bus',
    initialState: {buses : [], isLoding:false, error:null},
    reducer :{},
    extraReducers: {
        [getBus.pending]:(state,action)=>{
            state.isLoding=true;
            state.buses=action.payload;
            state.error=null;
        },
        [getBus.fulfilled]:(state,action)=>{
            state.isLoding=false;
            state.buses=action.payload;
        },
        [getBus.rejected]:(state, action)=>{
            state.isLoding=false;
            state.error=action.payload;

        },
        /////////////////////////////////////
        [insertBus.pending]:(state,action)=>{
            state.isLoding=true;
            state.error=null;
        },
        [insertBus.fulfilled]:(state,action)=>{
            state.isLoding=false;
            state.buses.push(action.payload);
        },
        [insertBus.rejected]:(state, action)=>{
            state.isLoding=false;
            state.error=action.payload;
    },

    [deleteBus.pending]:(state, action)=>{
        state.isLoding=true;
        state.error=null;
    },
    [deleteBus.fulfilled]:(state, action)=>{
          state.isLoding=false;
          state.buses=state.buses.filter((el)=>el.busId !== action.payload);

    },
    [deleteBus.rejected]:(state, action)=>{
        state.isLoding=false;
        state.error=action.payload;
    },
}
})


export default busSlice.reducer;
