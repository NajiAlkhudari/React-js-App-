import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

export const getTrip = createAsyncThunk('Trip/getTrip', async(_,thunkAPI)=>{
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


export const insertTrip =createAsyncThunk('Trip/insertTrip', async(tripData, thunkAPI)=>{
    const {rejectWithValue}=thunkAPI;
    try{
        const res=await fetch('',{
          method:'POST',
          body :JSON.stringify(tripData),
        
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




        export const deleteTrip=createAsyncThunk('Trip/deleteTrip', async(id, thunkAPI)=>{
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
          



const tripSlice= createSlice({      
    name: 'Trip',
    initialState: {trips : [], isLoding:false, error:null},
    reducer :{},
    extraReducers: {
        [getTrip.pending]:(state,action)=>{
            state.isLoding=true;
            state.trips=action.payload;
            state.error=null;
        },
        [getTrip.fulfilled]:(state,action)=>{
            state.isLoding=false;
            state.trips=action.payload;
        },
        [getTrip.rejected]:(state, action)=>{
            state.isLoding=false;
            state.error=action.payload;

        },
        /////////////////////////////////////
        [insertTrip.pending]:(state,action)=>{
            state.isLoding=true;
            state.error=null;
        },
        [insertTrip.fulfilled]:(state,action)=>{
            state.isLoding=false;
            state.trips.push(action.payload);
        },
        [insertTrip.rejected]:(state, action)=>{
            state.isLoding=false;
            state.error=action.payload;
    },

    [deleteTrip.pending]:(state, action)=>{
        state.isLoding=true;
        state.error=null;
    },
    [deleteTrip.fulfilled]:(state, action)=>{
          state.isLoding=false;
          state.trips=state.trips.filter((el)=>el.tripId !== action.payload);

    },
    [deleteTrip.rejected]:(state, action)=>{
        state.isLoding=false;
        state.error=action.payload;
    },
}
})


export default tripSlice.reducer;
