import React from 'react';
import HorseItem from '../HorseItem';
import mockedHorses from '../../../config/jest/dataMock';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders a HorseItem using Snapshots', () => {
  const wrapper = renderer.create(<HorseItem horse={mockedHorses[0]} />);
  expect(wrapper).toMatchSnapshot();
});
