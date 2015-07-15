Package.describe({
	name: "odefu-map",
	version: "0.0.1",
	summary: "A generator for a single level map.",
	git: "https://github.com/OdeFu/OdeGame.git",
	documentation: "README.md"
});

Package.onUse(function (api) {
	api.versionsFrom("METEOR@1.1");

	api.use(["odefu-lib", "odefu-config", "grigio:babel@0.1.4", "oaalto:rot"]);

	api.imply(["odefu-lib", "odefu-config"]);

	api.addFiles(["lib/odefu-map.jsx"]);
});

Package.onTest(function (api) {
	api.use("tinytest");
	api.use("odefu-map");
	api.addFiles(["tests/odefu-map-tests.js"]);
});
