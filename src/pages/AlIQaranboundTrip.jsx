import React from 'react'
import {Viewer} from '@grapecity/activereports-react'
import './Report.css'
const AlIQaranboundTrip = () => {
  return (
    <div id ="viewer-host">
        <Viewer report={{Uri : '/AlIQaranboundTrip.rdlx-json'}}   />
    </div>
  )
}

export default AlIQaranboundTrip