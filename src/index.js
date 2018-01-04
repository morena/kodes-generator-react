import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './components/App'

ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'));

//questions for Dan
//how do I apply styled components CSS to an already complex component?
//how can I manage CSS variations and reuse/import CSS- so look at Btn and BtnLink?
//why must a styled component be linked to an HTML tag necessarily?
//what about generic CSS like site-wide font-family? base font-size?
