import React from 'react'
import { Link } from 'react-router-dom'

const ListComponent = ({link, title}) => {
  return (
   <li className='mx-4 items-center justify-center'>
    <Link to={link}>{title}</Link>
   </li>
  )
}

export default ListComponent