import React from 'react'
import {Viewer} from '@grapecity/activereports-react'
import './Report.css'
const AlldamascusInboundTrip = () => {
  return (
    <div id ="viewer-host">
        <Viewer report={{Uri : '/AlldamascusInboundTrip.rdlx-json'}}   />
    </div>
  )
}

export default AlldamascusInboundTrip