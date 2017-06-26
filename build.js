const NwBuilder = require('nw-builder');

const nw = new NwBuilder({
	files: './src/**/**',
	buildDir: './dist/',
	buildType: function () {
		return this.appVersion;
	},
	flavor: 'normal',
	platforms: [ 'linux64', 'osx64', 'win64'],
	macIcns: './assets/bikeshed.icns',
	winIco: './assets/bikeshed.ico',
	zip: true
});

nw.on('log', console.log);

nw.build().then(function () {
	console.log('all done!');
}).catch(function (error) {
	console.error(error);
});
