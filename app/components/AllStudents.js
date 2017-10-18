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
    console.log('helelelfselgslglse')
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
        <Link to={'/enroll'}>
          <button>Add Student</button>
        </Link>
        <table>
          <tr>
            <th>Firstname</th>
            <th>Campus</th>
            <th>Expel</th>
          </tr>
          {this.state.students.length &&
            this.state.students.map(student => {
              return (
                <tr key={student.id}>
                  <Link to={`/students/${student.id}`}>
                    <td>{student.name}</td>
                  </Link>
                  <Link to={`/campus/${student.campus.id}`}>
                    <td>{student.campus.name}</td>
                  </Link>
                  <td>
                    <DeleteStudent delete={student.id} />
                  </td>
                </tr>
              );
            })}
        </table>
      </div>
    );
  }
}
