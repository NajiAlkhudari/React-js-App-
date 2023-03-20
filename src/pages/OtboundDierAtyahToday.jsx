


import React from 'react'
import {Viewer} from '@grapecity/activereports-react'
import './Report.css'
const OtboundDierAtyahToday = () => {
  return (
    <div id ="viewer-host">
        <Viewer report={{Uri : '/OutboundtripsdailytoDierAtyah.rdlx-json'}}   />
    </div>
  )
}

export default OtboundDierAtyahToday