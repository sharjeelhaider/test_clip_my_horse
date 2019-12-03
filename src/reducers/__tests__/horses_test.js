import horses from '../horses';
import {initialState} from '../horses';
import {receiveHorses} from '../../actions/api';
import data from '../../../config/jest/dataMock';

it('returns the same state on an unhandled action', () => {
  expect(horses(initialState, {type: 'HELLO_WORLD'})).toMatchSnapshot();
});

it('handles LOAD_HORSES_REQUEST action', () => {
  expect(horses(initialState, receiveHorses.request())).toMatchSnapshot();
});

it('handles LOAD_HORSES_FAILURE action', () => {
  const error = new Error('Look ma! I am an error');
  expect(horses(initialState, receiveHorses.failure(error))).toMatchSnapshot();
});

it('handles LOAD_HORSES_SUCCESS action', () => {
  // BOOM. If we change that specific reducer case, we'll compare the Snapshot results
  // and update them if the change is expected.
  expect(horses(initialState, receiveHorses.success(data))).toMatchSnapshot();
});
