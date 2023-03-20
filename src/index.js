import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Root from './pages/Root';
import AddSub from './pages/AddSub';
import EditSub from './pages/EditSub';
import Subscription from './pages/Subscription';
import Employee from './pages/Employee.jsx';
import AddEmp from './pages/AddEmp.jsx';

import Register from './pages/Register.jsx';
import AddReg from './pages/AddReg.jsx';

import Trip from './pages/Trip';
import Bus from './pages/Bus.jsx';

import AddTrip from './pages/AddTrip';
import LoginScreen from './pages/LoginScreen';
import RootLayout from './pages/RootLayout';
import AdminLayout from './pages/AdminLayout';
import UserLayout from './pages/UserLayout';
import Report from './pages/Report.jsx'
import InboundDamascusToday from './pages/InboundDamascusToday.jsx'
import InboundHomsToday from './pages/InboundHomsToday.jsx'
import InboundDierAtyahToday from './pages/InboundDierAtyahToday.jsx'
import InboundAlNabekToday from './pages/InboundAlNabekToday.jsx'
import InboundYabroudToday from './pages/InboundYabroudToday.jsx'
import InboundQaraToday from './pages/InboundQaraToday.jsx'
import OtboundDamascusToday from './pages/OtboundDamascusToday.jsx'
import OtboundHomsToday from './pages/OtboundHomsToday.jsx'
import Yesarday from './pages/Yesarday.jsx'
import FinesAll from './pages/FinesAll.jsx'



import OtboundDierAtyahToday from './pages/OtboundDierAtyahToday.jsx'
import OtboundAlNabekToday from './pages/OtboundAlNabekToday.jsx'
import OtboundYabroudToday from './pages/OtboundYabroudToday.jsx'
import OtboundQaraToday from './pages/OtboundQaraToday.jsx'
import OneUserToday from './pages/OneUserToday.jsx'
import OneUserAll from './pages/OneUserAll.jsx'
import AlldamascusInboundTrip from './pages/AlldamascusInboundTrip.jsx'
import AllhomsInboundTrip from './pages/AllhomsInboundTrip.jsx'
import AllDierAtyahInboundTrip from './pages/AllDierAtyahInboundTrip.jsx'
import AllAlNabekInboundTrip from './pages/AllAlNabekInboundTrip.jsx'
import AlldamascusOutboundTrip from './pages/AlldamascusOutboundTrip.jsx'
import FinesToday from './pages/FinesToday.jsx'



import AllYabroudInboundTrip from './pages/AllYabroudInboundTrip.jsx'
import AlIQaranboundTrip from './pages/AlIQaranboundTrip.jsx'
import User from './pages/User.jsx'
import Customer from './pages/Customer.jsx'
import Updateuser from './pages/Updateuser.jsx'
import AddCus from './pages/AddCus.jsx'
import EditCus from './pages/EditCus.jsx'

import AddBus from './pages/AddBus.jsx'


import AllhomsOutboundTrip from './pages/AllhomsOutboundTrip.jsx'

import AllDierAtyahOutboundTrip from './pages/AllDierAtyahOutboundTrip.jsx'
import AllAlNabekOutboundTrip from './pages/AllAlNabekOutboundTrip.jsx'
import AllYabroudOutboundTrip from './pages/AllYabroudOutboundTrip.jsx'

import AlIQaraOutboundTrip from './pages/AlIQaraOutboundTrip.jsx'



import {Provider} from 'react-redux';
import store from './store';


const router = createBrowserRouter([
  {


  path :"/",  
  element : <RootLayout /> ,
   children :[
   { index : true , element : <LoginScreen />},
  ], 
},
{path :"/Root" ,
 element : <AdminLayout />,
 children :[
    {
     index : true , element : <Root />
    },
    
     { path : "Subscription" , element :<Subscription />},
      {path : "Subscription/AddSub" , element :<AddSub />},
      {path : "Subscription/EditSub/:id" , element :<EditSub />},
      { path : "Employee" , element :<Employee />},
      {path : "Employee/AddEmp" , element :<AddEmp />},
      { path : "Bus" , element :<Bus />},
      {path : "Bus/AddBus" , element :<AddBus />},
      { path : "Register" , element :<Register />},
      { path : "Register/AddReg" , element :<AddReg />},

      

      { path : "Trip" , element :<Trip />},
      { path : "Trip/AddTrip" , element :<AddTrip />},
      {path: "InboundDamascusToday", element :<InboundDamascusToday />},
      {path: "InboundHomsToday", element :<InboundHomsToday />},
      {path: "InboundDierAtyahToday", element :<InboundDierAtyahToday />},
      {path: "InboundAlNabekToday", element :<InboundAlNabekToday />},
      {path: "InboundYabroudToday", element :<InboundYabroudToday />},
      {path: "InboundQaraToday", element :<InboundQaraToday />},
      {path: "OtboundDamascusToday", element :<OtboundDamascusToday />},
      {path: "OtboundHomsToday", element :<OtboundHomsToday />},
      {path: "OtboundDierAtyahToday", element :<OtboundDierAtyahToday />},
      {path: "OtboundAlNabekToday", element :<OtboundAlNabekToday />},
      {path: "OtboundYabroudToday", element :<OtboundYabroudToday />},
      {path: "OtboundQaraToday", element :<OtboundQaraToday />},
      {path: "OneUserToday", element :<OneUserToday />},
      {path: "OneUserAll", element :<OneUserAll />},
      {path: "FinesToday", element :<FinesToday />},
      {path: "Yesarday", element :<Yesarday />},
      {path: "FinesAll", element :<FinesAll />},

      
      
      {path: "AlldamascusInboundTrip", element :<AlldamascusInboundTrip />},
      {path: "AllhomsInboundTrip", element :<AllhomsInboundTrip />},
      {path: "AllDierAtyahInboundTrip", element :<AllDierAtyahInboundTrip />},
      {path: "AllAlNabekInboundTrip", element :<AllAlNabekInboundTrip />},
      {path: "AllYabroudInboundTrip", element :<AllYabroudInboundTrip />},
      {path: "AlIQaranboundTrip", element :<AlIQaranboundTrip />},
      {path: "AlldamascusOutboundTrip", element :<AlldamascusOutboundTrip />},
      {path: "AllhomsOutboundTrip", element :<AllhomsOutboundTrip />},
      {path: "AllDierAtyahOutboundTrip", element :<AllDierAtyahOutboundTrip />},
      {path: "AllAlNabekOutboundTrip", element :<AllAlNabekOutboundTrip />},
      {path: "AllYabroudOutboundTrip", element :<AllYabroudOutboundTrip />},
      {path: "AlIQaraOutboundTrip", element :<AlIQaraOutboundTrip />},

  ]
},

    {  path :"/User" ,
 element : <UserLayout />,
 children :[
    {
     index : true , element : <User />
    },
    { path : "Customer" , element :<Customer />},
    { path : "Customer/AddCus" , element :<AddCus />},
    { path : "Customer/EditCus/:customerId" , element :<EditCus />},

    
    { path : "Updateuser" , element :<Updateuser />},
    {path: "InboundDamascusToday", element :<InboundDamascusToday />},
    {path: "InboundHomsToday", element :<InboundHomsToday />},
    {path: "InboundDierAtyahToday", element :<InboundDierAtyahToday />},
    {path: "InboundAlNabekToday", element :<InboundAlNabekToday />},
    {path: "InboundYabroudToday", element :<InboundYabroudToday />},
    {path: "InboundQaraToday", element :<InboundQaraToday />},
    {path: "OtboundDamascusToday", element :<OtboundDamascusToday />},
    {path: "OtboundHomsToday", element :<OtboundHomsToday />},
    {path: "OtboundDierAtyahToday", element :<OtboundDierAtyahToday />},
    {path: "OtboundAlNabekToday", element :<OtboundAlNabekToday />},
    {path: "OtboundYabroudToday", element :<OtboundYabroudToday />},
    {path: "OtboundQaraToday", element :<OtboundQaraToday />},
    {path: "OneUserToday", element :<OneUserToday />},
    {path: "OneUserAll", element :<OneUserAll />},
    {path: "AlldamascusInboundTrip", element :<AlldamascusInboundTrip />},
    {path: "AllhomsInboundTrip", element :<AllhomsInboundTrip />},
    {path: "AllDierAtyahInboundTrip", element :<AllDierAtyahInboundTrip />},
    {path: "AllAlNabekInboundTrip", element :<AllAlNabekInboundTrip />},
    {path: "AllYabroudInboundTrip", element :<AllYabroudInboundTrip />},
    {path: "AlIQaranboundTrip", element :<AlIQaranboundTrip />},
    {path: "AlldamascusOutboundTrip", element :<AlldamascusOutboundTrip />},
    {path: "AllhomsOutboundTrip", element :<AllhomsOutboundTrip />},
    {path: "AllDierAtyahOutboundTrip", element :<AllDierAtyahOutboundTrip />},

    {path: "Yesarday", element :<Yesarday />},

    {path: "AllAlNabekOutboundTrip", element :<AllAlNabekOutboundTrip />},

    {path: "AllYabroudOutboundTrip", element :<AllYabroudOutboundTrip />},
    {path: "FinesAll", element :<FinesAll />},

    
    {path: "AlIQaraOutboundTrip", element :<AlIQaraOutboundTrip />},
    {path: "FinesToday", element :<FinesToday />},

    
 ],
}

]

 


)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Provider store ={store}>
  <RouterProvider router ={router} /> 
  </Provider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
