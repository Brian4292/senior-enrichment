import axios from 'axios';

// ACTION TYPES
const GET_STU = 'GET_STU';  
const CREATE_STU = 'CREATE_STU';
const DELETE_STU = 'DELETE_STU';
const SINGLE_STU = 'SINGLE_STU';
const UPDATE_STU = 'UPDATE_STU';

//ACTION CREATORS
const getStudent = students => ({type: GET_STU, students});
const createStudent = student => ({type: CREATE_STU, student});

export default function reducer (users = [], action) {
switch (action.type) {
    case GET_STU:
    return action.user;
    
    default:
    return users;
}

}

//THUNK CREATORS

export const fetchStudents = () => dispatch => {
    axios
    .get('api/students')
    .then(response => {
      return response.data;
    })
    .then(StudentList => {
        const action = getStudent(StudentList)
       dispatch(action);
    })
    .catch(err => {
      console.error('error');
      console.error(err);
    });
}