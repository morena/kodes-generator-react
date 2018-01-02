import React, { Component } from 'react'
import { BrowserRouter, Route, Link, IndexRoute, browserHistory } from 'react-router'
import Header from './Header'
import Main from './Main'

const App = () => (
  <div>
    <Header />
    <Main />
  </div>
)

export default App
