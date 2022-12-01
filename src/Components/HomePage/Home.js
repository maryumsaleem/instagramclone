import React, { Component } from 'react'
import MainContent from '../MainContent/MainContent'
//import PropTypes from 'prop-types'
import NavBar from '../NavBar/NavBar'

export default class Home extends Component {
  

  render() {
    return (
      <div>
        <NavBar/>
        <MainContent/>
      </div>
    )
  }
}
