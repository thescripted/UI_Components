import React from 'react'
import github from 'url:./github.svg'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="header h-16 flex items-center justify-between p-3 bg-blue-400 border-b-2 border-gray-400">
      <Link to="/">
        <h2 className="font-bold text-lg  mx-8">UI Components</h2>
      </Link>
      <input
        type="text"
        className="search bg-gray-200 rounded px-8 py-2 flex-grow"
        placeholder="Search the Library (coming soon)"
      ></input>
      <button className="bg-gray-400 mx-8 rounded p-2">Github</button>
    </div>
  )
}

export default Header
