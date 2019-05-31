import React, { Component } from 'react';
import Apod from '../../components/Apod'
class NASA extends Component{

  render(){
    return (
    <div className='wrapper'>
      <h2>
      NASA Picture of the Day
      </h2>
      <Apod />
    </div>
    )}
}
export default NASA
