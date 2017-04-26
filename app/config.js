// This is the runtime configuration file.  It complements the Gruntfile.js by
// supplementing shared properties.
require.config({
    paths: {
        // Make vendor easier to access.
        "vendor": "../vendor",

        // Almond is used to lighten the output filesize.
        "almond": "../vendor/bower/almond/almond",

        // Opt for Lo-Dash Underscore compatibility build over Underscore.
        "underscore": "../vendor/bower/lodash/dist/lodash.underscore",

        // Map remaining vendor dependencies.
        "jquery": "../vendor/bower/jquery/jquery",
        "bootstrap": "../vendor/bower/bootstrap/dist/js/bootstrap",

        "backbone": "../vendor/bower/backbone/backbone",
        "backbone-validation": "../vendor/bower/backbone-validation/dist/backbone-validation-amd",
        "marionette": "../vendor/bower/marionette/lib/backbone.marionette",

        "text": "../vendor/bower/requirejs-text/text",

        "modernizr" : "../vendor/bower/modernizr/modernizr",
        "detectizr" : "../vendor/bower/detectizr/detectizr"
    },

    shim: {
        // This is required to ensure Backbone works as expected within the AMD
        // environment.
        "backbone": {
            // These are the two hard dependencies that will be loaded first.
            deps: ["jquery", "underscore"],

            // This maps the global `Backbone` object to `require("backbone")`.
            exports: "Backbone"
        },
        "bootstrap": {
            deps: ["jquery"]
        },
        'modernizr': {
            deps: ['jquery'],
            exports: 'Modernizr'
        },
        'detectizr': {
            deps: ['jquery', 'modernizr'],
            exports: 'Detectizr'
        }
    }
});