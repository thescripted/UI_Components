import React from 'react'

const Sidebar = () => {
  return (
    <>
      <div className="sidebar flex flex-col w-1/5 h-full bg-gray-200 border-r-2 border-gray-600 border-dashed p-2 pt-8">
        <button className="hover:bg-blue-300 rounded m-1 duration-75">
          {' '}
          Dropdown
        </button>
        <button className="hover:bg-blue-300 rounded m-1 duration-75">
          {' '}
          Carousel
        </button>
        <button className="hover:bg-blue-300 rounded m-1 duration-75">
          {' '}
          Accordion
        </button>
      </div>
    </>
  )
}

export default Sidebar
