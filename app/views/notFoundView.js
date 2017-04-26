
define( function( require, exports, module) {
	"use strict";

	// External dependencies.
	var _ = require("underscore");
	var $ = require("jquery");
	var Backbone = require("backbone");
	var Bootstrap = require("bootstrap");
    var Vent = require("vent");

    // Templates
	var NotFoundTpl = require("text!templates/notFoundTpl.html");

	// Views
	// Models

	var data = {};
	var compiledTemplate;

    var NotFoundView = Backbone.View.extend({

        el: 'body',
        events: {},

        initialize: function ( options ) {
            compiledTemplate = _.template(
                NotFoundTpl,
                {
                    viewId: this.cid
                }
            );
        },

        render: function () {
            this.$el.html( compiledTemplate );
            return this;
        },

    });

	return NotFoundView;

});
