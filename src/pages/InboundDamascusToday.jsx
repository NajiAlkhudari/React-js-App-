import React from 'react'
import {Viewer} from '@grapecity/activereports-react'
import './Report.css'
const InboundDamascusToday = () => {
  return (
    <div id ="viewer-host">
        <Viewer report={{Uri : '/Inboundtripsdailyfromdamascus.rdlx-json'}}   />
    </div>
  )
}

export default InboundDamascusToday