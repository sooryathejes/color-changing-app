import React from 'react'
import { Link } from 'react-router-dom'
import './Green.css'
import Button from 'react-bootstrap/Button';


function green() {
  return (
    <div className='green'>
<h1 className='heading'> Background Color Changer App </h1>

   <Link to={'/red'}>
            <Button variant="danger me-2"id='one'>RED</Button>
            </Link>
            <Link to={'/blue'}>
            <Button variant="primary  me-2"id='one'>BLUE</Button>
            </Link>
            <Link to={'/green'}>
            <Button variant="success  me-2"id='one'>GREEN</Button>
            </Link>
            <Link to={'/yellow'}>
            <Button variant="warning  me-2"id='one'>YELLOW</Button>
            </Link>
    </div>
  )
}

export default green
