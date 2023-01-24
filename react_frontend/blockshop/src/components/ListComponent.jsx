import React from 'react'
import { Link } from 'react-router-dom'

const ListComponent = ({link, title}) => {
  return (
   <li className='mx-4 items-center justify-center p-2 lg:p-0'>
    <Link to={link}>{title}</Link>
   </li>
  )
}

export default ListComponent