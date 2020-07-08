import React from 'react'
import { useParams } from 'react-router-dom'
import Dropdown from './UIComponents/Dropdown/Dropdown'
let universities = [
  'Cornell University',
  'UTC',
  'UTK',
  'Harvard',
  'UIUC',
  'Northwestern',
  'Vanderbilt',
  'Georgia Trash',
]

const ContentLayout = () => {
  const { component } = useParams()
  return (
    <div className="component-layout p-4">
      {component === 'dropdown' && <Dropdown options={universities} />}
    </div>
  )
}

export default ContentLayout
