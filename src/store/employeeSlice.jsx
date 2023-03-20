import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'





export const getEmployee = createAsyncThunk('Employee/getEmployee', async(_,thunkAPI)=>{
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


export const insertEmployee =createAsyncThunk('Employee/insertEmployee', async(employeeData, thunkAPI)=>{
    const {rejectWithValue}=thunkAPI;
    try{
        const res=await fetch('',{
          method:'POST',
          body :JSON.stringify(employeeData),
        
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






        export const deleteEmployee=createAsyncThunk('Employee/deleteEmployee', async(id, thunkAPI)=>{
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
          



const employeeSlice= createSlice({      
    name: 'Employee',
    initialState: {emplyees : [], isLoding:false, error:null},
    reducer :{},
    extraReducers: {
        [getEmployee.pending]:(state,action)=>{
            state.isLoding=true;
            state.emplyees=action.payload;
            state.error=null;
        },
        [getEmployee.fulfilled]:(state,action)=>{
            state.isLoding=false;
            state.emplyees=action.payload;
        },
        [getEmployee.rejected]:(state, action)=>{
            state.isLoding=false;
            state.error=action.payload;

        },
        /////////////////////////////////////
        [insertEmployee.pending]:(state,action)=>{
            state.isLoding=true;
            state.error=null;
        },
        [insertEmployee.fulfilled]:(state,action)=>{
            state.isLoding=false;
            state.emplyees.push(action.payload);
        },
        [insertEmployee.rejected]:(state, action)=>{
            state.isLoding=false;
            state.error=action.payload;
    },

    [deleteEmployee.pending]:(state, action)=>{
        state.isLoding=true;
        state.error=null;
    },
    [deleteEmployee.fulfilled]:(state, action)=>{
          state.isLoding=false;
          state.emplyees=state.emplyees.filter((el)=>el.employeeId !== action.payload);

    },
    [deleteEmployee.rejected]:(state, action)=>{
        state.isLoding=false;
        state.error=action.payload;
    },
}
})


export default employeeSlice.reducer;
