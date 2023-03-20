


import React from 'react'
import {Viewer} from '@grapecity/activereports-react'
import './Report.css'
const AlldamascusOutboundTrip = () => {
  return (
    <div id ="viewer-host">
        <Viewer report={{Uri : '/AlldamascusOutboundTrip.rdlx-json'}}   />
    </div>
  )
}

export default AlldamascusOutboundTrip



