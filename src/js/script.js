'use strict';

(function() {

    var myThing = {

        someVar : 12 , 
        anotherVar : 'some string' , 

        sayHello : function() {
            return "Hello";
        } , 

        showVars : function() {
            var output = someVar + " " + anotherVar; 
            return output;
        } ,

        getItem : function() {
            var item = document.getElementById( 'some-dom-input' );
            console.log( item );
            return item; 
        } ,

    };

    var hiddenFunction = function() {
        console.log( "You won't get access to this outside of myThing" );
    }

    var exposedFunction = myThing.exposedFunction = function() {
        console.log( myThing.someFunction() );
        console.log( myThing.anotherFunction() );
    };

    // bind your project to the window
    window.myThing = window.myThing || myThing;

    // 
    return myThing;    

})();

