import React from 'react'
import {Viewer} from '@grapecity/activereports-react'
import './Report.css'
const AllhomsOutboundTrip = () => {
  return (
    <div id ="viewer-host">
        <Viewer report={{Uri : '/AllhomsOutboundTrip.rdlx-json'}}   />
    </div>
  )
}

export default AllhomsOutboundTrip
