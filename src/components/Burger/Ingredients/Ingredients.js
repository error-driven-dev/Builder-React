import React from "react"
import "./Ingredients.css"

import propTypes from "prop-types"

export const Ingredients = (props) => {
  let item = null
  switch (props.type) {
    case "bun-bottom":
      item = "BreadBottom"
      break
    case "bun-top":
      item = "BreadTop"
      break
      case "salad":
        item = "Salad"
        break
      case "bacon":
        item = "Bacon"
        break
        case "cheese":
          item = "Cheese"
          break
    case "meat":
      item = "Meat"
      break
 
 

    default:
      item = null
  }

  return (
    <div>
      <div className={item}>{item}</div>
    </div>
  )
}

Ingredients.propTypes = {
  type: propTypes.string.isRequired,
}
