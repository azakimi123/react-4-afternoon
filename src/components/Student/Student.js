import React, { Component } from 'react';
import axios from 'axios';

export default class Student extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentInfo: {}
    }

  }
  
  componentDidMount = () => {
    axios.get(`http://localhost:3005/students/${this.props.match.params.id}`)
    .then( res => {
      this.setState({studentInfo: res.data})
    })
    .catch( err => console.log(err))
  }

  handleButton = () => {
    this.props.history.goBack()
  }

  render() {
    // console.log(this.state.studentInfo)
    // console.log(this.props.history.goBack)
    const info = this.state.studentInfo;
    return (
      <div className="box">
        <h1>Student</h1>
        <h1>{info.first_name} {info.last_name} </h1>
        <h3>Grade: {info.grade}</h3>
        <h3>Email: {info.email}</h3>
        <button onClick={this.handleButton}>Back To Student List</button>
      </div>
    )
  }
}