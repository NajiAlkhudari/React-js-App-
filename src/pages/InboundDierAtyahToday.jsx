import React from 'react'
import {Viewer} from '@grapecity/activereports-react'
import './Report.css'
const InboundDierAtyahToday = () => {
  return (
    <div id ="viewer-host">
        <Viewer report={{Uri : '/InboundtripsdailyfromDierAtyah.rdlx-json'}}   />
    </div>
  )
}

export default InboundDierAtyahToday