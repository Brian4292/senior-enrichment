import React, { Component } from 'react';
import axios from 'axios';
import DeleteStudent from './DeleteStudent';
import { Link } from 'react-router-dom';

export default class AllStudents extends Component {
  constructor() {
    super();
    this.state = {
      students: []
    };
  }

  componentDidMount() {
    axios
      .get('api/students')
      .then(response => {
        return response.data;
      })
      .then(StudentList => {
        this.setState({ students: StudentList });
      })
      .catch(err => {
        console.error('error');
        console.error(err);
      });
  }

  render() {
    return (
      <div>
        <table>
          <tr>
            <th>Name</th>
            <th>Campus</th>
            <th>Expel</th>
          </tr>
          {this.state.students.length &&
            this.state.students.map(student => {
              return (
                <tr key={student.id}>
                  <td>
                    <Link to={`/students/${student.id}`}>{student.name}</Link>
                  </td>
                  <td>
                    <Link to={`/campus/${student.campus.id}`}>{student.campus.name}</Link>
                  </td>
                  <td><DeleteStudent delete={student.id} /></td>
                </tr>
              );
            })}
        </table>
      </div>
    );
  }
}
