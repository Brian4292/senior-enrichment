import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

function SingleStudent (props){
		const id = props.match.params.studentId;
		const studentFound = props.students.filter(student =>{
			return student.id == id;
		})
		return (
   <div>
	<Link to={`/edit/${studentFound.id}`}>
	  {" "}
	  <button>Edit</button>{" "}
	</Link>
	<h1>{studentFound.length && studentFound[0].name}</h1>
	<img src={studentFound.length && studentFound[0].image} alt="" />
	<article>
	  {`${studentFound.length && studentFound[0].name} is part of the`}{" "}
	  <Link to={`/campus/${studentFound.length && studentFound[0].campus.id}`}>{studentFound.length && studentFound[0].campus.name}</Link> Campus.{" "}
	  {studentFound.length && studentFound[0].content}
	</article>
  </div> 
		);
}

const mapState = ({ students }) => ({ students });

const mapDispatch = {};

export default connect(mapState, mapDispatch)(SingleStudent);
