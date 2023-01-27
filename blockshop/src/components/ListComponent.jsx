import React from 'react'
import { Link } from 'react-router-dom'

const ListComponent = ({link, title, onclick}) => {
  return (
   <li className='mx-4 items-center justify-center p-2 lg:p-0' >
    <Link to={link} onClick={onclick}>{title}</Link>
   </li>
  )
}

export default ListComponent