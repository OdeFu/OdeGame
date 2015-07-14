Package.describe({
	name: "odefu-lib",
	version: "0.0.1",
	summary: "The base library package for everything.",
	git: "https://github.com/OdeFu/OdeGame.git",
	documentation: "README.md"
});

Package.onUse(function (api) {
	api.versionsFrom("METEOR@1.1");

	var packages = [
		"autoupdate",
		"base64",
		"binary-heap",
		"callback-hook",
		"check",
		"ddp",
		"tracker",
		"ejson",
		"id-map",
		"json",
		"livedata",
		"logging",
		"minifiers",
		"minimongo",
		"mongo",
		"random",
		"reactive-dict",
		"reactive-var",
		"reload",
		"retry",
		"session",
		"webapp",
		"url",
		"observe-sequence",
		"http",
		"routepolicy",
		"ordered-dict",
		"webapp-hashing",
		"stevezhu:lodash"
	];

	api.use(packages);
	api.imply(packages);

	api.addFiles([
		"odefu-lib.js",
		"lodash_init.js"
	]);

	api.export([
		"OdeGame",
		"_"
	]);
});

Package.onTest(function (api) {
	api.use("tinytest");
	api.use("odefu-lib");
	api.addFiles("odefu-lib-tests.js");
});
