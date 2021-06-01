import React from 'react'
import './Ingredients'
import propTypes from 'prop-types'

export const Ingredients = (props) => {
  let item = null
  switch (props.type) {
    case 'bun-bottom':
      item = 'BreadBottom'
      break
    case 'bun-top':
      item = 'BreadTop'
      break
    case 'meat':
      item = 'Meat'
      break
    case 'cheese':
      item = 'Cheese'
      break
    default:
      item = null
  }

  return (
    <>
      <div className={item}></div>
    </>
  )
}

Ingredients.propTypes = {
  type: propTypes.string.isRequired,
}
