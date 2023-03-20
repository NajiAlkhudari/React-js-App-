import React from 'react'
import {Viewer} from '@grapecity/activereports-react'
import './Report.css'
const AllDierAtyahOutboundTrip = () => {
  return (
    <div id ="viewer-host">
        <Viewer report={{Uri : '/AllDierAtyahOutboundTrip.rdlx-json'}}   />
    </div>
  )
}

export default AllDierAtyahOutboundTrip
