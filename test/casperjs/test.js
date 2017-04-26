
// // Bootstrap
// var testUtils = require( 'includes/testUtils' );
// var $ 		  = require( 'includes/jquery-1.11.0.min' );
// //
// var env 	= testUtils.getEnvironment();
// var testUrl = testUtils.getUrl( env );
// //
// testUtils.configure( env, testUrl );



// Tests begin here
casper.test.begin( "Test Precision Survey", 1, function suite(test) {
	
	casper.start( "http://example.com", function(response) {
		test.assertSelectorHasText("h1", "Example Domain", "Example Domain text found in <h1>");
	});
	
	casper.run(function() {
	    test.done();
	});

});


