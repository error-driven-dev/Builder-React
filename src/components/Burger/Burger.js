import React from "react"
import { Ingredients } from "./Ingredients/Ingredients"
import './Burger.css'

// // const setMakeBurger = (name) => {
//     ...build;

// }

const Burger = (props) => {
  
  const currentBuild = Object.keys(props.ingredients).map((item) => {
    return [...Array(props.ingredients[item])]
    .map((_, i) => {
      return <Ingredients key={item + i} type={item}/>
    })
  })

const numIngredients = Object.values(props.ingredients).reduce((sum, val) => sum + val);
const startBuild = numIngredients ===0? <p>Add Ingredients to Start Building</p>: null;

  return (
    <div className='BurgerStyle' >
<Ingredients type='bun-top'></Ingredients>
      {currentBuild}
{startBuild}
 
<Ingredients type='bun-bottom'></Ingredients>
    </div>
  )
}

export default Burger
