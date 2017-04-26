
define( function( require, exports, module) {
	"use strict";

	// External dependencies.
	var _ = require("underscore");
	var $ = require("jquery");
	var Backbone = require("backbone");
	var Bootstrap = require("bootstrap");
    var Vent = require("vent");

    // Templates
	var BaseViewTpl = require("text!templates/baseTpl.html");

	// Views
	// var FooView = require("views/fooView");

	// Models
    var Sample = require("models/sampleModel");

	var data = {};
	var compiledTemplate;

    var BaseView = Backbone.View.extend({

        el: 'body',

        events: {
            "click .click-me": 'buttonClicked'
        },

        initialize: function ( options ) {
            compiledTemplate = _.template(
                BaseViewTpl,
                {
                    viewId: this.cid
                }
            );
            // Vent.on( 'BaseView::event', this.foo, this );
        },

        buttonClicked: function ( options ) {
			console.log('Button clicked!');
        },

        render: function () {
            this.$el.html( compiledTemplate );

            return this;
        },

    });

	return BaseView;

});
