import React from 'react'
import { useParams } from 'react-router-dom'
import Dropdown from './UIComponents/Dropdown/Dropdown'
const universities = ['Hello', 'World', 'This', 'Is', 'Working!']
const ContentLayout = () => {
  const { component } = useParams()
  return <>{component === 'dropdown' && <Dropdown options={universities} />}</>
}

export default ContentLayout
