import React from 'react'
import {Viewer} from '@grapecity/activereports-react'
import './Report.css'
const FinesAll = () => {
  return (
    <div id ="viewer-host">
        <Viewer report={{Uri : '/FinesAll.rdlx-json'}}   />
    </div>
  )
}

export default FinesAll