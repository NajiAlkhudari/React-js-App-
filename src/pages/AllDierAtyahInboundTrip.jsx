import React from 'react'
import {Viewer} from '@grapecity/activereports-react'
import './Report.css'
const AllDierAtyahInboundTrip = () => {
  return (
    <div id ="viewer-host">
        <Viewer report={{Uri : '/AllDierAtyahInboundTrip.rdlx-json'}}   />
    </div>
  )
}

export default AllDierAtyahInboundTrip



