import React from 'react'
import {Viewer} from '@grapecity/activereports-react'
import './Report.css'
const Report = () => {
  return (
    <div id ="viewer-host">
        <Viewer report={{Uri : '/AllInboundTrip.rdlx-json'}}   />
    </div>
  )
}

export default Report