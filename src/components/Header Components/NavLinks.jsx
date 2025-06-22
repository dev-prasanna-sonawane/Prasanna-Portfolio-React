import React from 'react'

function NavLinks(props) {
  return (
    <>
        <a href={props.link} className='nav-links'>{props.title}</a>
    </>
  )
}

export default NavLinks