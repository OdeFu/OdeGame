Package.describe({
	name: "odefu-config",
	version: "0.0.1",
	summary: "Support for configuration data.",
	git: "https://github.com/OdeFu/OdeGame.git",
	documentation: "README.md"
});

Package.onUse(function (api) {
	api.versionsFrom("METEOR@1.1");

	api.use(["odefu-lib", "grigio:babel"]);

	api.imply(["odefu-lib"]);

	api.addFiles(["lib/odefu-config.jsx"]);
});

Package.onTest(function (api) {
	api.use("tinytest");
	api.use("odefu-config");
	api.addFiles("odefu-config-tests.js");
});
