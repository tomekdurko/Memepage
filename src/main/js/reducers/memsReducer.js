import * as constants from '../constants';

const initalState = {
    mems: [],
    isError: false,
    isLoading: false,
    payload: { 
      id: 0
    }
};

export const memsReducer = (state = initalState, action) => {
  switch (action.type) {
    case constants.SET_ID:
       return { ...state, payload : {id: state.payload.id + 1} };
    case constants.MEMS_GET_START:
      return { ...state, isLoading : true};
    case constants.MEMS_GET_SUCCESS:
      return { ...state, isLoading: false, mems: action.payload.data};
    case constants.MEMS_GET_ERROR:
      return { ...state, isLoading: false, isError: true, error: 401};
    default:
      return state;
  }
};