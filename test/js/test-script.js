// testing for script.js

describe( 'Script Testing' , function() {

    // execute this code before each test
    beforeEach( function() {

        // fixtures are HTML snippets against which we can run our tests
        fixture.base = 'test/fixtures';
        fixture.load( 'snippet.fixture.html' );

        // optional
        myThing.sayHello();

    });

    afterEach( function() {
        fixture.cleanup();
    });

    describe( 'Basic Testing' , function() {


    });

    describe( 'Testing exposed functions' , function() {

        it( 'should return sayHello' , function() {
            expect( myThing.sayHello() ).toBe( "Hello" );
        });

    });

    describe( 'DOM Testing' , function() {

        it( 'should find the input item' , function() {
            var input = document.getElementById( 'some-input' );
            expect( input ).not.toBe( null );
        });

        it( 'should read the input text' , function() {
            var input = document.getElementById( 'some-input' );
            expect( input.value ).toBe( "Something" );
        });

    });

});

