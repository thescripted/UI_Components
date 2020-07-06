import React from 'react'

const Header = () => {
  return (
    <div className="header h-16 flex items-center justify-between p-3 border-b-2 border-gray-400">
      <h2 className="font-bold text-lg  mx-8">UI Components</h2>
      <input
        type="text"
        className="search bg-gray-200 rounded px-8 py-2 flex-grow"
        placeholder="Search the Library"
      ></input>
      <button className="mx-8 bg-gray-400 rounded p-2">Repository</button>
    </div>
  )
}

export default Header
