import React, { Component } from 'react'
//import PropTypes from 'prop-types'
import { Grid } from '@mui/material'
import StatusBar from '../StatusBar/StatusBar'
import MainPage from '../MainPage/MainPage'

export default class MainContent extends Component {
    constructor(props){
        super(props)
        this.state={
            
        }
            }

  render() {
    return (
      <div>
        <Grid container>
            <Grid item xs={2}> g1 </Grid>
            <Grid item xs={6}>
                <div>
                    <StatusBar/>
                    <MainPage/>
                </div>
            </Grid>
            <Grid item xs={2}> g3 </Grid>
            <Grid item xs={2}> g4 </Grid>
            </Grid>    
      </div>
    )
  }
}
