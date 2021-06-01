import React from 'react'
import './Layout.css'

export const Layout = (props) => {
  return (
    <>
      <div>toolbar nav backdrop</div>
      <main className='Content'>{props.children}</main>
    </>
  )
}
