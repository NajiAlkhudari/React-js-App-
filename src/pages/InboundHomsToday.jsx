import React from 'react'
import {Viewer} from '@grapecity/activereports-react'
import './Report.css'
const InboundHomsToday = () => {
  return (
    <div id ="viewer-host">
        <Viewer report={{Uri : '/Inboundtripsdailyfromhoms.rdlx-json'}}   />
    </div>
  )
}

export default InboundHomsToday