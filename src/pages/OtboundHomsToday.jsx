import React from 'react'
import {Viewer} from '@grapecity/activereports-react'
import './Report.css'
const OtboundHomsToday = () => {
  return (
    <div id ="viewer-host">
        <Viewer report={{Uri : '/Outboundtripsdailytohoms.rdlx-json'}}   />
    </div>
  )
}

export default OtboundHomsToday