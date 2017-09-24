import React, { Component } from 'react'
import { Router, Route } from 'react-router'
import TopNav from './TopNav'
import MainPage from '../components/MainPage'

export default class App extends Component {
  render() {
    return <MainPage></MainPage>
    return <Router >
      <Route path="/" component={MainPage} />
      <Route path="/index" component={MainPage} />
      <Route path="/about" component={MainPage} />
    </Router>
  }
}