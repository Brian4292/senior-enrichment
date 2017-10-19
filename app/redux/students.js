import axios from "axios";

// ACTION TYPES
const GET_STU = "GET_STU";
const CREATE_STU = "CREATE_STU";
const DELETE_STU = "DELETE_STU";
const UPDATE_STU = "UPDATE_STU";

//ACTION CREATORS
const getStudent = students => ({ type: GET_STU, students });
const createStudent = student => ({ type: CREATE_STU, student });
const deleteStudent = id => ({ type: DELETE_STU, id });
const updateStudent = id => ({type: UPDATE_STU, id});

export default function reducer(students = [], action) {
  switch (action.type) {
    case GET_STU:
      return action.students;
    case CREATE_STU:
      return [action.students, ...students];
    case DELETE_STU:
      return students.filter(student => student.id !== action.id);
    default:
      return students;
  }
}

//THUNK CREATORS

export const fetchStudents = () => dispatch => {
  axios
    .get('/api/students')
    .then(response => {
      return response.data;
    })
    .then(StudentList => {
      const action = getStudent(StudentList);
      dispatch(action);
    })
    .catch(err => {
      console.error("error");
      console.error(err);
    });
};

export const removeStudent = id => dispatch => {
  dispatch(deleteStudent(id));
  axios
    .delete(`api/students/${id}`)
    .then(response => {
      return response.data;
    })
    .catch(err => {
      console.error("error");
      console.error(err);
    });
};

export const createNewStudent = student => dispatch =>{
    const action = createStudent(student);
    dispatch(action);
    axios
    .post('/api/students', student)
    .then(res => res.data)
    .then(result => {
      console.log('*********', result); // response json from the server!
    })
    .then(() => {
    //   this.props.history.push('/students');
    });
}

export const updateCurrentStudent = id => dispatch => {
  const action = updateStudent(id);
  dispatch(action)
  axios
  .put(`/api/students/${id}`, studentForm)
  .then(res => res.data)
  .then(result => {
    console.log('*********', result); // response json from the server!
  }).then (() => {
    // this.props.history.push('/students');
  });
}
