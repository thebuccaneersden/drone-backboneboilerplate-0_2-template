define(function (require) {
    "use strict";

    var _ = require("underscore");
    var $ = require("jquery");
    var Backbone = require("backbone");

    // Models
    var SampleModel = require("models/sampleModel");

    var SampleCollection = Backbone.Collection.extend ({

        model: SampleModel,
        
        initialize: function ( options ) {
            // this.sortWith( { sorting: 'order', ordering: 'desc' } );
        },

        // sortWith: function( sortingOptions ) {
        //     this.sorting = sortingOptions.sorting;
        //     this.ordering = sortingOptions.ordering;
        // },

        comparator: function( collection ) {
            // var ordering;
            // if( this.ordering === 'asc' ) {
            //     ordering = 1;
            // } else if ( this.ordering === 'desc' ) {
            //     ordering = -1;
            // }
            // return ordering * collection.get( this.sorting );
            return collection;
        }

    });
    return SampleCollection;

});
