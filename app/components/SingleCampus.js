import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class AllCampus extends Component {

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
