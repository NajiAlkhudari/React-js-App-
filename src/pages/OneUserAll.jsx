import React from 'react'
import {Viewer} from '@grapecity/activereports-react'
import './Report.css'
const OneUserAll = () => {
  return (
    <div id ="viewer-host">
        <Viewer report={{Uri : '/OneUserAll.rdlx-json'}}   />
    </div>
  )
}

export default OneUserAll