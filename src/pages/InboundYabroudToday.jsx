import React from 'react'
import {Viewer} from '@grapecity/activereports-react'
import './Report.css'
const InboundYabroudToday = () => {
  return (
    <div id ="viewer-host">
        <Viewer report={{Uri : '/Inboundtripsdailyfromyabroud.rdlx-json'}}   />
    </div>
  )
}

export default InboundYabroudToday