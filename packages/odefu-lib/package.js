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
		"meteor-platform",
		"iron:router",
		"sacha:spin",
		"twbs:bootstrap",
		"ian:accounts-ui-bootstrap-3",
		"accounts-google",
		"accounts-password",
		"accounts-twitter",
		"accounts-facebook",
		"accounts-github",
		"accounts-meteor-developer",
		"stevezhu:lodash"
	];

	api.use(packages);
	api.imply(packages);

	api.addFiles([
		"lib/odefu-lib.js",
		"lib/lodash_init.js"
	]);

	api.export([
		"OdeGame",
		"_"
	]);
});

Package.onTest(function (api) {
	api.use("tinytest");
	api.use("odefu-lib");
	api.addFiles("tests/odefu-lib-tests.js");
});
