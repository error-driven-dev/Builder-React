import React, { useState } from "react"
import Burger from "./Burger/Burger"
import BuildControls from './Burger/BuildControls/BuildControls'

export const BurgerBuilder = () => {
  const [myBurger, setMyBurger] = useState({

  
    salad: 0,
    bacon: 0,
  
    cheese: 0,
    meat: 0
  })
  const increment = (name) => {
    const currentBuild = {...myBurger}
    currentBuild[name] =  myBurger[name] + 1
    setMyBurger(currentBuild)

  console.log(myBurger)
  }
  const decrement =(name) => {
    const currentBuild = {...myBurger}
    currentBuild[name] = myBurger[name]-1
    setMyBurger(currentBuild)
  }

  return (
    <>
      <Burger ingredients={myBurger}></Burger>
      <BuildControls ingredients={myBurger} addItem={increment} removeItem={decrement}></BuildControls>
    </>
  )
}
