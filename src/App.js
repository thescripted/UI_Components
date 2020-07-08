import React, { useState } from 'react'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import ContentLayout from './components/ContentLayout'
import Dropdown from './components/UIComponents/Dropdown/Dropdown'
import { BrowserRouter as Router } from 'react-router-dom'
import { Switch, Route } from 'react-router-dom'

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

const App = () => {
  const [content, setContent] = useState('')
  const generateSelectedContent = (selectedContent) => {
    setContent(selectedContent)
  }

  return (
    <div className="h-screen">
      <Header />
      <main className="flex flex-row h-full ">
        <Sidebar generateSelectedContent={generateSelectedContent} />
        {/* <ContentLayout content={content} /> */}
        <Switch>
          <Route exact path="/:component">
            <ContentLayout />
          </Route>
        </Switch>
      </main>
    </div>
  )
}

export default App
