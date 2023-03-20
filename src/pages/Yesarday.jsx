import React from 'react'
import {Viewer} from '@grapecity/activereports-react'
import './Report.css'
const Yesarday = () => {
  return (
    <div id ="viewer-host">
        <Viewer report={{Uri : '/Yesarday.rdlx-json'}}   />
    </div>
  )
}

export default Yesarday