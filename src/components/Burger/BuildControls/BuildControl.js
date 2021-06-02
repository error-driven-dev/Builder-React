import React from 'react'

export const BuildControl = (props) => {
    return (
        <div>
                        <p>{props.name}
            <button onClick={()=> props.add(props.name)}>+</button>
            <button onClick={() => props.remove(props.name)}>-</button>
            </p>
        </div>
    )
}

