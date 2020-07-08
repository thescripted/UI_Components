import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = ({ generateSelectedContent }) => {
  return (
    <>
      <div className="sidebar flex flex-col w-1/5 bg-gray-200 border-r-2 border-gray-600 border-dashed p-2 pt-8">
        <Link to="/dropdown">
          <button
            className="btn m-1"
            onClick={() => generateSelectedContent('Dropdown')}
          >
            Dropdown
          </button>
        </Link>
        <Link to="/carousel">
          <button
            className="btn m-1"
            onClick={() => generateSelectedContent('Carousel')}
          >
            Carousel
          </button>
        </Link>
        <Link to="/accordion">
          <button
            className="btn m-1"
            onClick={() => generateSelectedContent('Accordion')}
          >
            Accordion
          </button>
        </Link>
      </div>
    </>
  )
}

export default Sidebar
