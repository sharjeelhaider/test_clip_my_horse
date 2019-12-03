import {asyncActionNames, buildAsyncActions} from './utils/asyncUtils.js';
import {encode} from 'base-64';
// Constants
export const LOAD_HORSES = asyncActionNames('LOAD_HORSES');

// Actions
export const receiveHorses = buildAsyncActions(LOAD_HORSES);

// Async actions
export const fetchData = (
  username,
  password,
  endpoint,
  fetchAction,
) => async dispatch => {
  let auth = {Authorization: 'Basic ' + encode(username + ':' + password)};
  const requestOptions = {
    method: 'GET',
    headers: auth,
  };
  try {
    dispatch(fetchAction.request());
    const response = await fetch(endpoint, requestOptions);
    if (handleErrors(response)) {
      const responseJson = await response.json();
      dispatch(fetchAction.success(responseJson));
    }
  } catch (error) {
    dispatch(fetchAction.failure(error));
  }
};

function handleErrors(response) {
  if (!response.ok) {
    throw Error('Authentication error');
    //Api always return null for statusText
    // throw Error(response.statusText);
  }
  return response;
}
