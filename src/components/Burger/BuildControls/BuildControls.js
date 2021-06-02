import React from 'react'
import {BuildControl} from './BuildControl'

const BuildControls = (props) => {
    const controlList = Object.keys(props.ingredients).map((item,i) => {
        return <BuildControl name={item} key={item+1} add={props.addItem} remove={props.removeItem} ></BuildControl>})
    return (
        <div>
{controlList}
        </div>
    )
}

export default BuildControls
