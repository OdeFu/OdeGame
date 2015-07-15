Package.describe({
	name: "odefu-world",
	version: "0.0.1",
	summary: "A world generator with many dungeons.",
	git: "https://github.com/OdeFu/OdeGame.git",
	documentation: "README.md"
});

Package.onUse(function (api) {
	api.versionsFrom("METEOR@1.1");

	api.use(["odefu-lib", "odefu-config", "odefu-dungeon", "grigio:babel@0.1.4", "oaalto:rot"]);

	api.imply(["odefu-lib", "odefu-config", "odefu-dungeon"]);

	api.addFiles(["lib/odefu-world.jsx"]);
});

Package.onTest(function (api) {
	api.use("tinytest");
	api.use("odefu-world");
	api.addFiles(["tests/odefu-world-tests.js"]);
});
