import React from 'react'
import {Viewer} from '@grapecity/activereports-react'
import './Report.css'
const OtboundYabroudToday = () => {
  return (
    <div id ="viewer-host">
        <Viewer report={{Uri : '/Outboundtripsdailytoyabroud.rdlx-json'}}   />
    </div>
  )
}

export default OtboundYabroudToday