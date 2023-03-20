import React from 'react'
import {Viewer} from '@grapecity/activereports-react'
import './Report.css'
const OtboundAlNabekToday = () => {
  return (
    <div id ="viewer-host">
        <Viewer report={{Uri : '/Outboundtripsdailytoalnabek.rdlx-json'}}   />
    </div>
  )
}

export default OtboundAlNabekToday

