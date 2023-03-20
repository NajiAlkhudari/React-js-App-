import React from 'react'
import {Viewer} from '@grapecity/activereports-react'
import './Report.css'
const InboundAlNabekToday = () => {
  return (
    <div id ="viewer-host">
        <Viewer report={{Uri : '/Inboundtripsdailyfromalnabek.rdlx-json'}}   />
    </div>
  )
}

export default InboundAlNabekToday