import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'



export const getCustomer = createAsyncThunk('Customer/getCustomer', async(_,thunkAPI)=>{
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


export const insertCustomer =createAsyncThunk('Customer/insertCustomer', async(customerData, thunkAPI)=>{
    const {rejectWithValue}=thunkAPI;
    try{
        const res=await fetch('',{
          method:'POST',
          body :JSON.stringify(customerData),
        
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



        export const deleteCustomer=createAsyncThunk('Customer/deleteCustomer', async(id, thunkAPI)=>{
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
          

   

                export const updateCustomer = createAsyncThunk('Customer/updateCustomer', async(payload)=>{
            
                const response=await axios.put(`/${payload.id}`,payload);
                return response.data;
                
                
                });


const customerSlice= createSlice({      
    name: 'Customer',
    initialState: {customers : [], isLoding:false, error:null},
    reducer :{},
    extraReducers: {
        [getCustomer.pending]:(state,action)=>{
            state.isLoding=true;
            state.customers=action.payload;
            state.error=null;
        },
        [getCustomer.fulfilled]:(state,action)=>{
            state.isLoding=false;
            state.customers=action.payload;
        },
        [getCustomer.rejected]:(state, action)=>{
            state.isLoding=false;
            state.error=action.payload;

        },
        /////////////////////////////////////
        [insertCustomer.pending]:(state,action)=>{
            state.isLoding=true;
            state.error=null;
        },
        [insertCustomer.fulfilled]:(state,action)=>{
            state.isLoding=false;
            state.customers.push(action.payload);
        },
        [insertCustomer.rejected]:(state, action)=>{
            state.isLoding=false;
            state.error=action.payload;
    },

    [deleteCustomer.pending]:(state, action)=>{
        state.isLoding=true;
        state.error=null;
    },
    [deleteCustomer.fulfilled]:(state, action)=>{
        state.isLoding=false;
        state.customers=state.customers.filter((el)=>el.customerId !== action.payload);

    },
    [deleteCustomer.rejected]:(state, action)=>{
        state.isLoding=false;
        state.error=action.payload;
    },
    [updateCustomer.pending]:(state,action)=>{
        state.isLoding=true;
        state.error=null;
    },
    [updateCustomer.fulfilled]:(state,action)=>{
        state.isLoding=false;
        state.customers.push(action.payload);
    },
    [updateCustomer.rejected]:(state, action)=>{
        state.isLoding=false;
        state.error=action.payload;
},
}
})


export default customerSlice.reducer;
