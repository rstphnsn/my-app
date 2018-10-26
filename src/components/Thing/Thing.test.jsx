import React from 'react';
import { shallow } from 'enzyme';

import Thing from '.'

describe('Thing component', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Thing />);
  });

  it('renders without crashing', () => {
    expect(component).toMatchSnapshot();
  });

  describe('when `lazy` prop is truthy', () => {
    it('renders without crashing', () => {
      component = shallow(<Thing lazy />);
      expect(component).toMatchSnapshot();
    });
  });
});
