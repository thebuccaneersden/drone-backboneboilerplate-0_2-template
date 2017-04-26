define(function(require, exports, module) {
    "use strict";

    // External dependencies.
    var Backbone = require("backbone");

    // Views
    var BaseView = require("views/baseView");
    var NotFoundView = require("views/notFoundView");

    var $body = $('body');

    // Defining the application router.
    module.exports = Backbone.Router.extend({
        routes: {
            "": "index",
            "route1": "route1",
            "route2/:param": "route2",
            "*notFound": "notfound"
        },

        index: function() {
            console.log("Welcome to your / route.");
            var baseView = new BaseView( {
                el: $body
            }).render();
        },

        route1: function() {
            console.log("Welcome to your /#path route.");
        },

        route2: function(param) {
            console.log("Welcome to your /#pathwithparam route.");
            console.log(param);
        },

        notfound: function(a,b,c) {
            var notFoundView = new NotFoundView( {
                el: $body
            }).render();
        }
    });
});