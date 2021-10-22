import { axiosWithAuth } from '../../utils/axiosWithAuth';

// Map Action Types
export const GET_ALL_MAPS_START = 'GET_ALL_MAPS_START';
export const GET_ALL_MAPS_SUCCESS = 'GET_ALL_MAPS_SUCCESS';
export const GET_ALL_MAPS_FAIL = 'GET_ALL_MAPS_FAIL';
export const GET_ALL_MAPS_RESOLVE = 'GET_ALL_MAPS_RESOLVE';

// Map Actions
export const getAllMapActions = () => dispatch => {
  dispatch({ type: GET_ALL_MAPS_START });

  axiosWithAuth()
    .get(`/api/maps`)
    .then(res => {
      dispatch({ type: GET_ALL_MAPS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GET_ALL_MAPS_FAIL, payload: err.message });
    })
    .finally(() => {
      dispatch({ type: GET_ALL_MAPS_RESOLVE });
    });
};
