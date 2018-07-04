import * as constants from '../constants';
import fetch from 'isomorphic-fetch';
import axios from 'axios'

export function setData(dataId) {
  return {
    type: constants.SET_ID,
    payload: { 
      id: dataId
    } 
  };
}

export function getMemsStart() {
  return {
    type: constants.MEMS_GET_START
  }
}

export function getMemsSuccess(data) {
  return {
    type: constants.MEMS_GET_SUCCESS,
    payload: {
      data
    }
  }
}

export function getMemsError(error) {
  return {
    type: constants.MEMS_GET_ERROR,
    payload: {
      error
    }
  }
}
export function getMems() {
  return (dispatch) => {
    dispatch(getMemsStart());
    fetch(constants.HOST + '/api/meme') 
    .then(response => response.json())
    .then(data => dispatch(getMemsSuccess(data)))
    .catch(error => dispatch(getMemsError(error)));
  }
}
