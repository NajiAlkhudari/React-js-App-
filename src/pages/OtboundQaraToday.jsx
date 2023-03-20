import React from 'react'
import {Viewer} from '@grapecity/activereports-react'
import './Report.css'
const OtboundQaraToday = () => {
  return (
    <div id ="viewer-host">
        <Viewer report={{Uri : '/Outboundtripsdailytoqara.rdlx-json'}}   />
    </div>
  )
}

export default OtboundQaraToday