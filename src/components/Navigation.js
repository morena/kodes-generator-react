import React from 'react'
import { Router, Link } from 'react-router-dom'
import Home from './Home'
import Design from './Design'

const Navigation = () => (
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/design">Design your Custom Necklace</Link></li>
      </ul>
    </div>
)
export default Navigation
