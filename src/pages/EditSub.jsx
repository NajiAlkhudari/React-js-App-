import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useNavigate  } from 'react-router-dom';
import { editSub } from '../store/subscriptionSlice';
import {Form , Button} from 'semantic-ui-react';

import axios from 'axios'
 
export default function EditSub() {
  //Get Params productId từ URL
  const {id} = useParams();
  const navigate = useNavigate();
  const dispatch  = useDispatch();
  


  const [name , setName]=useState('');
  const [city , setCity]=useState('');
  const [price , setPrice]=useState('');
  const [firstDay , setFirstDay]=useState('');
  const [secondDay , setSecondDay]=useState('');


  useEffect (()=> {
    setName(localStorage.getItem('name'));
    setCity(localStorage.getItem('city'));
   setPrice(localStorage.getItem('price'));
   setFirstDay(localStorage.getItem('firstDay'));
   setSecondDay(localStorage.getItem('secondDay'));
},[])
 
  return (
    <>
    <div>
    <h1>This is a product page for product {id} </h1></div>
    <div>
        <Form>
     <Form.Field>
      <label>name</label>
      <input name="name"
       onChange={(e)=>setName(e.target.value) } placeholder='Name' />
    </Form.Field>
    <Form.Field>
      <label>city</label>
      
      <input name="city"
             onChange={(e)=>setCity(e.target.value) } placeholder='City' />
    </Form.Field>
    <Form.Field>
      <label>price</label>
      
      <input name="price"
             onChange={(e)=>setPrice(e.target.value) } placeholder='Price' />
    </Form.Field>
    <Form.Field>
      <label>firstDay</label>
      
      <input name="firstDay"
             onChange={(e)=>setFirstDay(e.target.value) } placeholder='FirstDay' />
    </Form.Field>
    <Form.Field>
      <label>secondDay</label>
      
      <input name="secondDay"
             onChange={(e)=>setSecondDay(e.target.value) } placeholder='secondDay' />
    </Form.Field>
    <Button type='submit' onClick={()=>dispatch(editSub(id,{name,city, price, firstDay, secondDay}))}>update</Button>
  </Form>

    </div>
    </>
    );
  
}
