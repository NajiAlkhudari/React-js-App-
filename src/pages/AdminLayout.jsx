import React from 'react'
import {Outlet} from 'react-router-dom'
import  Header from '../components/Header';
import  Footer from '../components/Footer.js';
import WithGuard from '../components/WithGuard.js'

 function AdminLayout() {
  return (
         <>

            <Header />
            <div>
            <Outlet /> 
            </div>
            <Footer />







     </>
  )
}
export default WithGuard  (AdminLayout)