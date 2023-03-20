import React from 'react'
import {Viewer} from '@grapecity/activereports-react'
import './Report.css'
const AllAlNabekOutboundTrip = () => {
  return (
    <div id ="viewer-host">
        <Viewer report={{Uri : '/AllAlNabekOutboundTrip.rdlx-json'}}   />
    </div>
  )
}

export default AllAlNabekOutboundTrip