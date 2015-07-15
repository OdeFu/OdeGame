Package.describe({
	name: "odefu-dungeon",
	version: "0.0.1",
	summary: "A generator for a dungeon with variable amount of level maps.",
	git: "https://github.com/OdeFu/OdeGame.git",
	documentation: "README.md"
});

Package.onUse(function (api) {
	api.versionsFrom("METEOR@1.1");

	api.use(["odefu-lib", "odefu-config", "odefu-map", "grigio:babel@0.1.4", "oaalto:rot"]);

	api.imply(["odefu-lib", "odefu-config", "odefu-map"]);

	api.addFiles(["lib/odefu-dungeon.jsx"]);
});

Package.onTest(function (api) {
	api.use("tinytest");
	api.use("odefu-dungeon");
	api.addFiles("lib/odefu-dungeon-tests.js");
});
