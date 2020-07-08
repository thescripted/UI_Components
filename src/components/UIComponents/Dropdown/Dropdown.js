import React, { useEffect, useReducer } from 'react'
import close from 'url:./close.svg' // "url: is required for parcel to build" Issue: https://github.com/parcel-bundler/parcel/issues/4222

const Dropdown = (props) => {
  console.log(props)
  let initialState = {
    dropdownModal: false,
    selectedIndex: [],
  }

  const reducer = (state, action) => {
    switch (action.type) {
      case 'toggleDropdown':
        return { ...state, dropdownModal: !state.dropdownModal }
      case 'addItem':
        return {
          ...state,
          dropdownModal: true,
          selectedIndex: [...state.selectedIndex, action.addIndex],
        }
      case 'removeItem':
        let newSelection = state.selectedIndex.filter(
          (item) => action.removeIndex !== item
        )
        return { dropdownModal: true, selectedIndex: newSelection }
      default:
        throw new Error('Please provide an action type.')
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="dropdown-container">
      <header className="header w-full text-center font-bold text-black">
        <h2>Dropdown Container</h2>
      </header>
      <main className="container">
        <div
          role="button"
          onClick={() => dispatch({ type: 'toggleDropdown' })}
          className="selected-fields bgcolor flex flex-row justify-between items-center h-60 py-3 px-6 rounded box-border overflow-x-hidden duration-75"
        >
          {state.selectedIndex.length === 0 ? (
            <div>Choose some options</div>
          ) : (
            <div className="display-container flex flex-row flex-wrap">
              {state.selectedIndex.map((index) => (
                <span
                  key={index}
                  className="display-item flex flex-row items-center mx-1 mb-1 px-2 py-1 rounded border border-yellow-800"
                  onClick={() => {
                    dispatch({ type: 'removeItem', removeIndex: index })
                    state.dropdownModal && dispatch({ type: 'toggleDropdown' })
                  }}
                >
                  <div className="item-content mr-4">
                    {props.options[index]}
                  </div>
                  <img src={close} alt="close button" className="h-2 w-2" />
                </span>
              ))}
            </div>
          )}
          <div className={state.dropdownModal ? 'icon open' : 'icon'}></div>
        </div>
        <div
          className={`multiselect bgcolor ${state.dropdownModal ? '' : 'hide'}`}
        >
          {props.options.map((item, index) => {
            const isDisabled = state.selectedIndex.includes(index)
            return (
              !isDisabled && (
                <div
                  className="multiselect-item multi-hover flex items-center h-8 px-6"
                  key={index}
                  role="button"
                  value={item}
                  onClick={() => dispatch({ type: 'addItem', addIndex: index })}
                >
                  {item}
                </div>
              )
            )
          })}
        </div>
      </main>
    </div>
  )
}

export default Dropdown
