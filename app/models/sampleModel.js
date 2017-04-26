define(function (require) {
    "use strict";


	var _ = require("underscore");
	var $ = require("jquery");
	var Backbone = require("backbone");
	// var URI = require('vendor/bower/uri.js/src/URI');
	

	var Sample = Backbone.Model.extend ({

		urlRoot: "/sample/",

		// If you want to so some manipulation of the urlRoot before making the request
		// urlRoot: function() {
		// var url = "/sample/";
		// url = URI( url ).addSearch( 'query', '1' ).toString();
		// return url;
		// },

		defaults: {
			id: null,
			field1: null,
			field2: false
		},

		initialize: function() {},

		// If you need to massage the response
		parse: function(resp, xhr) {
			return resp;
		},

	});
	//
	return Sample;

});
