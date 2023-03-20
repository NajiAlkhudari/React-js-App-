import { configureStore } from "@reduxjs/toolkit";
import signin from './signinSlice';
import subscriptions from "./subscriptionSlice";
import trips from "./tripSlice";
import customers from "./customerSlice";
import emplyees from "./employeeSlice";
import buses from './busSlice.jsx'
import registers from './registerSlice.jsx'


const store = configureStore({
    reducer :{
   user :signin,
   subscriptions,
   trips,
   customers,
   emplyees,
   buses,
   registers
    },
});
export default store;