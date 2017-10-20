import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";


 function SingleCampus (props) {
   console.log(props.match.params.campusId,'PARATAMS')
    const campus = props.campuses.filter(campus=>{
      return campus.id == props.match.params.campusId
    })[0];
    console.log(campus,'FILTERED')
    const students = campus.students
    console.log(students,'STUDENTS')
    return (
      <div>
        <img
          style={{
            height: '512px',
            width: '512px'
          }}
          src={`../${campus.image}`}
        />
        <h1>{campus.name}'s Student List</h1>
        {
          students.map(student => {
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


const mapState = ({ campuses, students }) => ({ campuses,students });

const mapDispatch = {};

export default connect(mapState, mapDispatch)(SingleCampus);


