import React from 'react';
import {LoginPage} from '../LoginPage';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders a LoginPage using Snapshots', () => {
  const _getComponent = props => {
    return renderer.create(<LoginPage horses={props} getHorses={jest.fn()} />);
  };

  let component = _getComponent({isLoading: true});
  expect(component).toMatchSnapshot();

  component = _getComponent({isLoading: false});
  expect(component).toMatchSnapshot();
});

it('should change state if email entered', () => {
  const props = {horses: []};

  const wrapper = renderer.create(
    <LoginPage horses={props} getHorses={jest.fn()} />,
  );
  const instance = wrapper.getInstance();
  instance.handleEmailText('foo@gmail.com');
  expect(instance.state.email).toEqual('foo@gmail.com');
});

it('should change state if password entered', () => {
  const props = {horses: []};

  const wrapper = renderer.create(
    <LoginPage horses={props} getHorses={jest.fn()} />,
  );
  const instance = wrapper.getInstance();
  instance.handlePasswordText('bar');
  expect(instance.state.password).toEqual('bar');
});

it('should called getHorses function if credentials are passed to handleSubmit function', () => {
  const props = {horses: []};
  const wrapper = renderer.create(
    <LoginPage horses={props} getHorses={jest.fn()} />,
  );
  const instance = wrapper.getInstance();
  instance.handleSubmit('foo@gmail.com', 'bar');
  expect(instance.props.getHorses).toHaveBeenCalled();
});

it('should not called getHorses function if empty credentials are passed to handleSubmit function', () => {
  const props = {horses: []};
  const wrapper = renderer.create(
    <LoginPage horses={props} getHorses={jest.fn()} />,
  );
  const instance = wrapper.getInstance();
  instance.handleSubmit('', '');
  expect(instance.props.getHorses).not.toHaveBeenCalled();
});
