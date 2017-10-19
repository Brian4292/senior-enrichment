import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

function SingleStudent (props){
		const id = props.match.params.studentId;
		const studentFound = props.students.filter(student =>{
			return student.id == id;
		})[0]
		return (
   <div>
	<Link to={`/edit/${studentFound.id}`}>
	  {" "}
	  <button>Edit</button>{" "}
	</Link>
	<h1>{studentFound.name}</h1>
	<img src={studentFound.image} alt="" />
	<article>
	  {`${studentFound.name} is part of the`}{" "}
	  <Link to={`/campus/${studentFound.campus.id}`}>{studentFound.campus.name}</Link> Campus.{" "}
	  {studentFound.content}
	</article>
  </div> 
		)
}

const mapState = ({ students }) => ({ students });

const mapDispatch = {};

export default connect(mapState, mapDispatch)(SingleStudent);
