import React from 'react'
import {Viewer} from '@grapecity/activereports-react'
import './Report.css'
const AllYabroudOutboundTrip = () => {
  return (
    <div id ="viewer-host">
        <Viewer report={{Uri : '/AllYabroudOutboundTrip.rdlx-json'}}   />
    </div>
  )
}

export default AllYabroudOutboundTrip