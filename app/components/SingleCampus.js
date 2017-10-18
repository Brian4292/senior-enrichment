import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class AllCampus extends Component {
  constructor() {
    super();
    this.state = {
      selectedCapmus: {},
      studentsList: []
    };
  }

  componentDidMount() {
    const id = this.props.match.params.campusId;
    axios
      .get(`/api/campus/${id}`)
      .then(response => {
        return response.data;
      })
      .then(campus => {
        this.setState({ studentsList: campus.students });
        this.setState({ selectedCapmus: campus });
      })
      .catch(err => {
        console.error('error');
        console.error(err);
      });
  }

  render() {
    const campus = this.state.selectedCapmus;
    console.log(campus.image);
    return (
      <div>
        <img
          style={{
            height: '512px',
            width: '512px'
          }}
          src={`../${campus.image}`}
        />
        <h1>{this.state.selectedCapmus.name}'s Student List</h1>
        {this.state.studentsList.length &&
          this.state.studentsList.map(student => {
            return (
              <Link key={student.id} to={`/students/${student.id}`}>
                <p key={student.name}>{student.name}</p>
                <img src={student.image} />
              </Link>
            );
          })}
      </div>
    );
  }
}
