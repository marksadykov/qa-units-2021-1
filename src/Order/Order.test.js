jest.mock('../utils/getDate');

import React from 'react'
import {shallow} from 'enzyme';
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Order from "./Order";
import {getDate} from "../utils/getDate";

Enzyme.configure({ adapter: new Adapter() })

describe('Order.js', () => {

  beforeAll(() => getDate.mockReturnValue('9 декабря, вс, 2018 год'));

  afterAll(() => jest.clearAllMocks());

  it('Order with props', () => {
    const order = {
      date: 1544356800000,
      shop: 'text',
      items: ['1', '2']
    };

    const output = shallow(
        <Order order={order} />
    );
    expect(output).toMatchSnapshot();
  });

  it('Order with props calls', () => {
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
    expect(output).toMatchSnapshot();
  });

  it('order.items is undefined calls', () => {
    expect(getDate).toHaveBeenCalledTimes(2);
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
    expect(output).toMatchSnapshot();
  });

  it('order.items have 0 length calls', () => {
    expect(getDate).toHaveBeenCalledTimes(3);
  });

  it('order is undefined', () => {
    const order = undefined;

    const output = shallow(
        <Order order={order} />
    );
    expect(output).toEqual({});
  });

  it('order.shop is undefined', () => {
    const order = {
      shop: undefined,
    };

    const output = shallow(
        <Order order={order} />
    );
    expect(output).toEqual({});
  });

  it('order.date is undefined', () => {
    const order = {
      date: undefined,
    };

    const output = shallow(
        <Order order={order} />
    );
    expect(output).toEqual({});
  });

  it('order.shops and order.date are undefined', () => {
    const order = {
      date: undefined,
      shop: undefined,
    };

    const output = shallow(
        <Order order={order} />
    );
    expect(output).toEqual({});
  });

  it('render without props', () => {
    const output = shallow(
        <Order />
    );
    expect(output).toEqual({});
  });
});

