import React from 'react'
import {Viewer} from '@grapecity/activereports-react'
import './Report.css'
const AllYabroudInboundTrip = () => {
  return (
    <div id ="viewer-host">
        <Viewer report={{Uri : '/AllYabroudInboundTrip.rdlx-json'}}   />
    </div>
  )
}

export default AllYabroudInboundTrip