var nativefier = require('nativefier').default;
const apps = require("./apps.json");

const createNativefierApp = (name = {}) => {
	if (typeof name !== 'string') {
		throw new TypeError(`Expected a string, got ${typeof name}`);
	}

	nativefier(apps[name], function (error, appPath) {
		if (error) {
			console.error(error);
			return;
		}
		console.log('App has been nativefied to', appPath);
	});
	//return `${name} & ${postfix}`;
};

module.exports = createNativefierApp;
