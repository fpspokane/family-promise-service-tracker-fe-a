import {
  GET_ALL_MAPS_START,
  GET_ALL_MAPS_SUCCESS,
  GET_ALL_MAPS_FAIL,
  GET_ALL_MAPS_RESOLVE,
} from '../actions/mapsActions';

export const initialMapState = {
  maps: [],
  map: null,
  status: 'Resolved',
  error: '',
};

export const mapsReducer = (state = initialMapState, action) => {
  switch (action.type) {
    // Get All map information
    case GET_ALL_MAPS_START:
      return {
        ...state,
        status: 'Pending',
      };
    case GET_ALL_MAPS_SUCCESS:
      return {
        ...state,
        maps: action.payload,
        status: 'Successful',
      };
    case GET_ALL_MAPS_FAIL:
      return {
        ...state,
        error: action.payload,
        status: 'Failed',
      };
    case GET_ALL_MAPS_RESOLVE:
      return {
        ...state,
        status: 'Resolved',
      };
    default:
      return state;
  }
};
