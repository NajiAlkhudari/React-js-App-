import React from 'react'
import {Viewer} from '@grapecity/activereports-react'
import './Report.css'
const OtboundDamascusToday = () => {
  return (
    <div id ="viewer-host">
        <Viewer report={{Uri : '/Outboundtripsdailytodamascus.rdlx-json'}}   />
    </div>
  )
}

export default OtboundDamascusToday