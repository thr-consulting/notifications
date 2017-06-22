import React from 'react';
import {NotificationSystem} from '../dist';

before(() => {
	sinon.stub(console, 'error').callsFake(warning => {
		throw new Error(warning);
	})
});
after(() => {
	console.error.restore()
});

describe('NotificationSystem', () => {
	it('renders without error', () => {
		shallow(<NotificationSystem/>);
	});
});
