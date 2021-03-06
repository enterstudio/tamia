import * as util from '../src/util';

describe('util', () => {
	it('isEventReceiver() should return true if a value is an DOM element', () => {
		let result = util.isEventReceiver(document.createElement('div'));
		expect(result).to.be.true;
	});

	it('isEventReceiver() should return true if a value is a document', () => {
		let result = util.isEventReceiver(document);
		expect(result).to.be.true;
	});

	it('isEventReceiver() should return true if a value is a window', () => {
		let result = util.isEventReceiver(window);
		expect(result).to.be.true;
	});

	it('isEventReceiver() should return false if a value is anything else', () => {
		expect(util.isEventReceiver(null)).to.be.false;
		expect(util.isEventReceiver('foo')).to.be.false;
		expect(util.isEventReceiver({ bar: 'baz' })).to.be.false;
	});
});
