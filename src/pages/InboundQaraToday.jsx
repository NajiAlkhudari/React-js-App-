import React from 'react'
import {Viewer} from '@grapecity/activereports-react'
import './Report.css'
const InboundQaraToday = () => {
  return (
    <div id ="viewer-host">
        <Viewer report={{Uri : '/InboundtripsdailyfromQara.rdlx-json'}}   />
    </div>
  )
}

export default InboundQaraToday