import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default class ClassList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: []
    }
    
  }

  componentDidMount = () => {
    
    axios.get(`http://localhost:3005/students?class=${this.props.match.params.class}`)
    .then(res => {
      this.setState({students: res.data })
      // console.log(res)
    })
    .catch( err => console.log(err));
  }

  render() {
    // console.log(this.props)
    let mappedStudents = this.state.students.map((student , index) => ( 
      <Link to={ `/student/${student.id}` } key={index} >
        <h3>{student.first_name} {student.last_name}</h3>  
      </Link>
    ));
    
    return (
      <div className="box">
        <h1>{this.props.match.params.class}</h1>
        <h2>ClassList:</h2>
        {mappedStudents}
      </div>
    )
  }
}