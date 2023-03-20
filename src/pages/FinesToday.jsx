import React from 'react'
import {Viewer} from '@grapecity/activereports-react'
import './Report.css'
const FinesToday = () => {
  return (
    <div id ="viewer-host">
        <Viewer report={{Uri : '/FinesToday.rdlx-json'}}   />
    </div>
  )
}

export default FinesToday
