import React from 'react';
import {HorsePage} from '../HorsePage';
import horses from '../../../config/jest/dataMock';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

jest.mock('../../components/HorseList', () => 'HorseList');

it('renders a HorsePage using Snapshots', () => {
  const _getComponent = props => {
    return renderer.create(<HorsePage horses={props} />);
  };

  let component = _getComponent({horses: []});
  expect(component).toMatchSnapshot();

  component = _getComponent({horses: horses});
  expect(component).toMatchSnapshot();
});
