define(function(require, exports, module) {
    "use strict";

    // External dependencies.
    var _ = require("underscore");
    var $ = require("jquery");
    var Backbone = require("backbone");
	var URI = require('vendor/bower/uri.js/src/URI');
	var Base64 = require('vendor/bower/requirejs-base64/base64');

    // Alias the module for easier identification.
    var app = module.exports;

	/*
	 * Configure jQuery.Ajax to always pass certain parameters when making an ajax call:
	 * - Always include the query string parameters base64 encoded with every API call
	 */
	var uri = URI( window.location.href );
	var query = uri.query();

	// Tokenize the query
	var queryEncoded = Base64.encode( query );

	$( document ).ajaxSend(function( event, jqxhr, settings ) {
		settings.url = URI( settings.url ).addSearch( 'token', queryEncoded ).toString();
	});

	// The root path to run the application through.
    app.root = "/";

    var Vent = require("vent");
    console.log(Vent);
});