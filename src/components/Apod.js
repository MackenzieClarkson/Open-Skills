import React, { Component } from 'react';
import NASAService from '../services/NASAService'
import axios from 'axios'
import moment from 'moment'
class Apod extends Component{
  constructor(props) {

    super(props);
    this.state={
      dateSelected: moment().format('YYYY-MM-DD'),
      image: '',
      title: '',
      explanation: ''
    }
    this.requestObject = {}
    this.dateSelect = this.dateSelect.bind(this);
  }

  componentDidMount() {
    this.dateSelect(this.state.dateSelected)
   }

  async dateSelect (dateEvent) {
    this.requestObject.date = dateEvent
    const response = await NASAService.apod(this.requestObject)

    this.setState({
      dateSelected: dateEvent,
      image: response.data.hdurl,
      title: response.data.title,
      explanation: response.data.explanation
    })

  }
render(){
  return (
    <React.Fragment>
      <div className='mini-wrap card center'>
        <h4>
          Select Date
        </h4>
        <input type="date"
          value = {this.state.dateSelected}
          onChange = {(e) =>this.dateSelect(e.target.value)}
          />
        </div>
        {this.state.image &&
          <div className='fill-wrap card'>
          <h3>
          {this.state.title}
          </h3>
          <p>
          {this.state.explanation}
          </p>
            <img className="img-contain" src={this.state.image} />
         </div>
       }
    </React.Fragment>
  )}
}
export default Apod;
