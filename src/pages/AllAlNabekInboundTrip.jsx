import React from 'react'
import {Viewer} from '@grapecity/activereports-react'
import './Report.css'
const AllAlNabekInboundTrip = () => {
  return (
    <div id ="viewer-host">
        <Viewer report={{Uri : '/AllAlNabekInboundTrip.rdlx-json'}}   />
    </div>
  )
}

export default AllAlNabekInboundTrip
