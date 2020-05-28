import React from 'react';
import { shallow } from 'enzyme';
import Error from '../../components/Error';

test('should render Error Page correctly', () => {
  const wrapper = shallow(<Error />);
  expect(wrapper).toMatchSnapshot();
});
