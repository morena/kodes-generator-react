import React from 'react'
import { Link } from 'react-router-dom'
import Home from './Home'
import Design from './Design'

const Navigation = () => (
    <div>
      <ul>
          <li><Link to="/" component={Home}>Home</Link></li>
          <li><Link to="/design" component={Design}>Design your Custom Necklace</Link></li>
      </ul>
    </div>
)
export default Navigation
