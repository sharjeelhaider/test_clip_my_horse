import {LOAD_HORSES} from '../actions/api';

export const initialState = {
  // Exporting it for test purposes
  error: null,
  isLoading: false,
  horses: null,
  isLoggedIn: false,
};

export default function horses(state = initialState, action) {
  switch (action.type) {
    case LOAD_HORSES.failure:
      return {...state, error: action.error, isLoading: false};
    case LOAD_HORSES.request:
      return {...state, error: null, isLoading: true};
    case LOAD_HORSES.success:
      return {
        ...state,
        error: null,
        isLoading: false,
        isLoggedIn: true,
        horses: action.data,
      };
    default:
      return state;
  }
}
