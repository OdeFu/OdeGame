Package.describe({
	name: "odefu-entity",
	version: "0.0.1",
	summary: "A base entity system for OdeGame.",
	git: "https://github.com/OdeFu/OdeGame.git",
	documentation: "README.md"
});

Package.onUse(function (api) {
	api.versionsFrom("METEOR@1.1");

	api.use(["odefu-lib", "odefu-config", "grigio:babel"]);

	api.imply(["odefu-lib", "odefu-config"]);

	api.addFiles("lib/odefu-entity.jsx");
});

Package.onTest(function (api) {
	api.use("tinytest");
	api.use("odefu-entity");
	api.addFiles("tests/odefu-entity-tests.js");
});
