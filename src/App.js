import React from 'react'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import ContentLayout from './components/ContentLayout'
import { Switch, Route } from 'react-router-dom'

const App = () => {
  return (
    <div className="h-screen">
      <Header />
      <main className="flex flex-row h-full ">
        <Sidebar />
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
