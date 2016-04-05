/**
 * Require Browsersync
 */
var browserSync = require('browser-sync');

/**
 * Run Browsersync with server config
 */
browserSync({
	server: "",
    files: ["*.html", "styles/*.css", "scripts/*.js"]
});