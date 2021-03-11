import React from 'react'
import {sortByItemCount} from './sortOrders';
import {sortByDate} from './sortOrders';
import {getSortFunction} from './sortOrders';
import {sortTypes} from './sortOrders';
import {sortOrders} from './sortOrders';


describe('sortByItemCount function', () => {
	it('orders are null', () => {
		const result = sortByItemCount(null, null);
		expect(result).toEqual(0);
	});

	it('order1 is null', () => {
		const order1 = null;

		const order2 = {
			items: ['1', '2'],
		};
		const result = sortByItemCount(order1, order2);
		expect(result).toEqual(0);
	});

	it('order2 is null', () => {
		const order1 = {
			items: ['1', '2'],
		};

		const order2 = null;
		const result = sortByItemCount(order1, order2);
		expect(result).toEqual(0);
	});

	it('orders are undefined', () => {
		const result = sortByItemCount(undefined, undefined);
		expect(result).toBe(0);
	});

	it('order1 is undefined', () => {
		const order1 = undefined;

		const order2 = {
			items: ['1', '2'],
		};
		const result = sortByItemCount(order1, order2);
		expect(result).toEqual(0);
	});

	it('order2 is undefined', () => {
		const order1 = {
			items: ['1', '2'],
		};

		const order2 = undefined;
		const result = sortByItemCount(order1, order2);
		expect(result).toEqual(0);
	});

	it('orders.items are undefined', () => {

		const order1 = {
			items: undefined,
		};

		const order2 = {
			items: undefined,
		};

		const result = sortByItemCount(order1, order2);
		expect(result).toBe(0);
	});

	it('orders1.items is undefined', () => {

		const order1 = {
			items: undefined,
		};

		const order2 = {
			items: ['1', '2'],
		};

		const result = sortByItemCount(order1, order2);
		expect(result).toBe(0);
	});

	it('orders2.items is undefined', () => {

		const order1 = {
			items: ['1', '2'],
		};

		const order2 = {
			items: undefined,
		};

		const result = sortByItemCount(order1, order2);
		expect(result).toBe(0);
	});

	it('items1.length less than items2.length:', () => {
		const order1 = {
			items: ['item1', 'item2'],
		};

		const order2 = {
			items: ['1', '2', '3'],
		};

		const result = sortByItemCount(order1, order2);
		expect(result).toBe(-1);
	});

	it('same items count', () => {
		const order1 = {
			items: ['item1', 'item2'],
		};

		const order2 = {
			items: ['1', '2'],
		};

		const result = sortByItemCount(order1, order2);

		expect(result).toBe(0);
	});

	it('items1.length more than items2.length:', () => {
		const order1 = {
			items: ['item1', 'item2', 'item3'],
		};

		const order2 = {
			items: ['1', '2'],
		};

		const result = sortByItemCount(order1, order2);
		expect(result).toBe(1);
	});
});

describe('sortByDate function', () => {
	it('orders are null', () => {
		const result = sortByDate(null, null);
		expect(result).toEqual(0);
	});

	it('order1 is null', () => {
		const order1 = null;

		const order2 = {
			date: 100,
		};
		const result = sortByDate(order1, order2);
		expect(result).toEqual(0);
	});

	it('order2 is null', () => {
		const order1 = {
			date: 100,
		};

		const order2 = null;
		const result = sortByDate(order1, order2);
		expect(result).toEqual(0);
	});

	it('orders are undefined', () => {
		const result = sortByDate(undefined, undefined);
		expect(result).toBe(0);
	});

	it('order1 is undefined', () => {
		const order1 = undefined;

		const order2 = {
			date: 100,
		};
		const result = sortByDate(order1, order2);
		expect(result).toEqual(0);
	});

	it('order2 is undefined', () => {
		const order1 = {
			date: 100,
		};

		const order2 = undefined;
		const result = sortByDate(order1, order2);
		expect(result).toEqual(0);
	});

	it('orders.date are undefined', () => {
		const order1 = {
			date: undefined,
		};

		const order2 = {
			date: undefined,
		};

		const result = sortByDate(order1, order2);
		expect(result).toBe(0);
	});

	it('orders1.date is undefined', () => {
		const order1 = {
			date: undefined,
		};

		const order2 = {
			date: 100,
		};

		const result = sortByDate(order1, order2);
		expect(result).toBe(0);
	});

	it('orders2.date is undefined', () => {
		const order1 = {
			date: 100,
		};

		const order2 = {
			date: undefined,
		};

		const result = sortByDate(order1, order2);
		expect(result).toBe(0);
	});

	it('orders1.date less orders2.date', () => {
		const order1 = {
			date: 100,
		};

		const order2 = {
			date: 200,
		};

		const result = sortByDate(order1, order2);
		expect(result).toBe(1);
	});

	it('orders1.date more orders2.date', () => {
		const order1 = {
			date: 200,
		};

		const order2 = {
			date: 100,
		};

		const result = sortByDate(order1, order2);
		expect(result).toBe(-1);
	});

	it('orders1.date equal orders2.date', () => {
		const order1 = {
			date: 100,
		};

		const order2 = {
			date: 100,
		};

		const result = sortByDate(order1, order2);
		expect(result).toBe(0);
	});
});

describe('getSortFunction function', () => {
	it('sortType is null', () => {
		const result = getSortFunction(null);
		expect(result).toEqual(undefined);
	});

	it('sortType is sortTypes.DATE', () => {
		const result = getSortFunction(sortTypes.DATE);
		expect(result).toEqual(sortByDate);
	});

	it('sortType is sortTypes.COUNT', () => {
		const result = getSortFunction(sortTypes.COUNT);
		expect(result).toEqual(sortByItemCount);
	});
});

describe('sortOrders function', () => {
	it('orders is undefined', () => {
		const result = sortOrders(undefined, sortByDate);
		expect(result).toEqual(undefined);
	});

	it('orders have 0 length', () => {
		const orders = [];
		const result = sortOrders(orders, sortByDate);
		expect(result).toEqual(undefined);
	});

	it('sortFunction is undefined', () => {
		const orders = [1, 2];
		const result = sortOrders(orders, undefined);
		expect(result).toEqual(undefined);
	});

	it('sortFunction is null', () => {
		const orders = [1, 2];
		const result = sortOrders(orders, null);
		expect(result).toEqual(undefined);
	});

	it('sortFunction is sortByDate', () => {
		const orders = [
			{
				date: 100,
			},
			{
				date: 200,
			},
			{
				date: 300,
			}
		];

		const ordersSorted = [
			{
				date: 300,
			},
			{
				date: 200,
			},
			{
				date: 100,
			}
		];
		const result = sortOrders(orders, sortByDate);
		expect(result).toEqual(undefined);
		expect(orders).toEqual(ordersSorted);
	});

	it('sortFunction is sortByItemCount', () => {
		const orders = [
			{
				items: ['1', '2', '3', '4'],
			},
			{
				items: ['1', '2', '3'],
			},
			{
				items: ['1', '2'],
			}
		];

		const ordersSorted = [
			{
				items: ['1', '2'],
			},
			{
				items: ['1', '2', '3'],
			},
			{
				items: ['1', '2', '3', '4'],
			}
		];
		const result = sortOrders(orders, sortByItemCount);
		expect(result).toEqual(undefined);
		expect(orders).toEqual(ordersSorted);
	});
});
