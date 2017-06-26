const NwBuilder = require('nw-builder');

const nw = new NwBuilder({
	files: './src/**',
	buildDir: './dist',
	buildType: () => {
		return this.appVersion;
	},
	flavor: 'normal',
	platforms: [ 'linux64', 'osx64', 'win64' ]
});

nw.on('log', console.log);

nw.build().then(
	() => {
		console.log('success')
	},
	console.error
);
