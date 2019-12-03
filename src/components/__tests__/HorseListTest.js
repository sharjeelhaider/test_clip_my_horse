import React from 'react';
import HorseList from '../HorseList';
import mockedHorses from '../../../config/jest/dataMock';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders a HorseList using Snapshots', () => {
  const wrapper = renderer.create(<HorseList horses={mockedHorses} />);
  expect(wrapper).toMatchSnapshot();
});
