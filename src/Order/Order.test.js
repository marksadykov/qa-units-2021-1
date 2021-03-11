jest.mock('../utils/getDate');

import React from 'react'
import { shallow, configure } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Order from "./Order";
import {getDate} from "../utils/getDate";

Enzyme.configure({ adapter: new Adapter() })

describe('Order.js', () => {
  getDate.mockReturnValue('9 декабря, вс, 2018 год');

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Order with props', () => {

    const order = {
      date: 1544356800000,
      shop: 'text',
      items: ['1', '2']
    };

    const output = shallow(
        <Order order={order} />
    );
    expect(shallowToJson(output)).toMatchSnapshot();
    expect(getDate).toHaveBeenCalledTimes(1);
  });

  it('order.items is undefined', () => {
    const order = {
      date: 1544356800000,
      shop: 'text',
      items: undefined,
    };

    const output = shallow(
        <Order order={order} />
    );
    expect(shallowToJson(output)).toMatchSnapshot();
    expect(getDate).toHaveBeenCalledTimes(1);
  });

  it('order.items have 0 length', () => {
    const order = {
      date: 1544356800000,
      shop: 'text',
      items: [],
    };

    const output = shallow(
        <Order order={order} />
    );
    expect(shallowToJson(output)).toMatchSnapshot();
    expect(getDate).toHaveBeenCalledTimes(1);
  });

  it('order is undefined', () => {
    const order = undefined;

    const output = shallow(
        <Order order={order} />
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });

  it('order.shop is undefined', () => {
    const order = {
      shop: undefined,
    };

    const output = shallow(
        <Order order={order} />
    );
    expect(shallowToJson(output)).toMatchSnapshot()
  });

  it('order.date is undefined', () => {
    const order = {
      date: undefined,
    };

    const output = shallow(
        <Order order={order} />
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });

  it('order.shopa and order.date are undefined', () => {
    const order = {
      date: undefined,
      shop: undefined,
    };

    const output = shallow(
        <Order order={order} />
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });

  it('render without props', () => {
    const output = shallow(
        <Order />
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});

