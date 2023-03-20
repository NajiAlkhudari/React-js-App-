import React from 'react'
import {Outlet} from 'react-router-dom'
import  HeaderUser from '../components/HeaderUser.js';
import  Footer from '../components/Footer.js';
import WithGuard from '../components/WithGuard.js'

 function UserLayout() {
  return (
         <>

            <HeaderUser />
            <div>
            <Outlet /> 
            </div>
            <Footer />







     </>
  )
}
export default WithGuard(UserLayout) 