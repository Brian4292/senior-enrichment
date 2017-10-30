import axios from 'axios';
import history from '../history';
import {onDeleteCampus} from './students'

const GET_CAMPUS = 'GET_CAMPUS';
const CREATE_CAMPUS = 'CREATE_CAMPUS';
const DELETE_CAMPUS = 'DELETE_CAMPUS';
const UPDATE_CAMPUS = 'UPDATE_CAMPUS';

const getCampus = campuses => ({ type: GET_CAMPUS, campuses });
const createCampus = campus => ({ type: CREATE_CAMPUS, campus });
const deleteCampus = id => ({ type: DELETE_CAMPUS, id });

export default function reducer(campuses = [], action) {
  switch (action.type) {
    case GET_CAMPUS:
      return action.campuses;
    case CREATE_CAMPUS:
      return [action.campus, ...campuses];
    case DELETE_CAMPUS:
      return  campuses.filter(campus => campus.id !== action.id);
    default:
      return campuses;
  }
}

export const fetchCampuses = () => dispatch => {
    axios
    .get('/api/campus/')
    .then(response => {
      console.log(response.data);
      return response.data;
    })
    .then(campusList => {
      const action = getCampus(campusList);
      dispatch(action);
    })
    .catch(err => {
      console.error('error');
      console.error(err);
    });
}

export const createNewCampus = campus => dispatch =>{
  axios
  .post('/api/campus', campus)
  .then(res => res.data)
  .then(result => {
    console.log('*********', result); // response json from the server!
    const action = createCampus(result);
    dispatch(action);
  })
  .then(() => {
  history.push('/');
  });
}

export const removeCampus = id => dispatch => {
  dispatch(deleteCampus(id));
  dispatch(onDeleteCampus(id));
  axios
    .delete(`api/campus/${id}`)
    .then(response => {
      return response.data;
    })
    .catch(err => {
      console.error('error');
      console.error(err);
    });
};