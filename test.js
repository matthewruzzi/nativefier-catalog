import test from 'ava';
import nativefierCatalog from './index.js';

test('title', t => {
	t.throws(() => {
		nativefierCatalog(123);
	}, {
		instanceOf: TypeError,
		message: 'Expected a string, got number'
	});

	t.is(nativefierCatalog('unicorns'), 'unicorns & rainbows');
});
