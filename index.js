var nativefier = require("nativefier").default;
const apps = require("./apps.json");
const { MultiSelect } = require('enquirer');

const createNativefierApp = (name = {}) => {
	if (typeof name !== "string") {
		throw new TypeError(`Expected a string, got ${typeof name}`);
	}
	if (apps[name].hasOwnProperty("additionalOptions")) {
		var additionalOptionsList = Object.keys(apps[name].additionalOptions);
		console.log(additionalOptionsList)
		const prompt = new MultiSelect({  //TODO: Make options with "default": true selected by default
			name: 'additionalOptions',
			message: 'Available Additional Options ',
			hint: '(Use <space> to select, <return> to submit)',
			choices: additionalOptionsList
		});

		prompt.run()
			.then(answer => runNativefier(getOptions(name, answer)))
			.catch(console.error);
	}
	else {
		var options = [];
		options.name = apps[name].name;
		options.targetUrl = apps[name].targetUrl;
		runNativefier(options);
	}
}





function getOptions(name = {}, selectedAdditionalOptions = {}) {
	var options = [];
	selectedAdditionalOptions.forEach(element => {
		Object.keys(apps[name].additionalOptions[element].flags).forEach(option => {
			options[option] = apps[name].additionalOptions[element].flags[option]
		});
	});
	options.name = apps[name].name;
	options.targetUrl = apps[name].targetUrl;
	console.dir(options);
	return options;
}

/*runNativefier(config);*/
//return `${name} & ${postfix}`;

function runNativefier(config = {}) {
	nativefier(config, function (error, appPath) {
		if (error) {
			console.error(error);
			return;
		}
		console.log("App has been nativefied to", appPath);
	});
}
module.exports = createNativefierApp;
