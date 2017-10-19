import React, { Component } from "react";
import axios from "axios";
import DeleteStudent from "./DeleteStudent";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

function AllStudents (props) {
   {
    const studentList = props.students;
    return (
      <div>
        <table>
          <tr>
            <th>Name</th>
            <th>Campus</th>
            <th>Expel</th>
          </tr>
          {studentList.map(student => {
            return (
              <tr key={student.id}>
                <td>
                  <Link to={`/students/${student.id}`}>{student.name}</Link>
                </td>
                <td>
                  <Link to={`/campus/${student.campus.id}`}>
                    {student.campus.name}
                  </Link>
                </td>
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

const mapState = ({ students }) => ({ students });

const mapDispatch = {};

export default connect(mapState, mapDispatch)(AllStudents);
