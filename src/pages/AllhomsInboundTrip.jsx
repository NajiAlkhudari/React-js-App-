import React from 'react'
import {Viewer} from '@grapecity/activereports-react'
import './Report.css'
const AllhomsInboundTrip = () => {
  return (
    <div id ="viewer-host">
        <Viewer report={{Uri : '/AllhomsInboundTrip.rdlx-json'}}   />
    </div>
  )
}

export default AllhomsInboundTrip