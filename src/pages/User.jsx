import React from 'react'
import UserInbound from '../components/UserInbound.js'
import Home from './Home'
import UserOutound from '../components/UserOutound.js'
import UserAdiition from '../components/UserAdiition.js'

import ReportOneUser from '../components/ReportOneUser.js'

function User() {
  return (
    <>
    <UserInbound /> 
    <UserOutound />
   <UserAdiition />
   <ReportOneUser /> 
    </>
    )
}

export default User