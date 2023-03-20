import React from 'react'
import {Viewer} from '@grapecity/activereports-react'
import './Report.css'
const AlIQaraOutboundTrip = () => {
  return (
    <div id ="viewer-host">
        <Viewer report={{Uri : '/AlIQaraOutboundTrip.rdlx-json'}}   />
    </div>
  )
}

export default AlIQaraOutboundTrip


