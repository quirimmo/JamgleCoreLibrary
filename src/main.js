/* JamgleCoreLibrary main */
/* global $:false */


var JamgleCoreLibrary = function() {
    this.name="Quirino";
    this.RESTConnector= new RESTConnector();
};

JamgleCoreLibrary.prototype.say= function(){
    console.log("CIAO " + this.name);
};

// Version.
JamgleCoreLibrary.VERSION = '0.0.1';


// Export to the root, which is probably `window`.
root.JamgleCoreLibrary = JamgleCoreLibrary;


var jamCoreLib = new JamgleCoreLibrary();




/** TESTING CODE **/

/*
var testObj= {
    author: "PIPPA PEG", 
    creationDate: 1424708822430,
    description: "djsad alkdj lakjdasljlljaldljdsaljda",
    id: 11,
    name: "Quirino's WebSite",
    url: "www.quirino.it"
};


var resultPromise= jamCoreLib.RESTConnector.delete("website", 1);
resultPromise.then(function( data, textStatus, jqXHR ) {
    console.log(data);
}, function() {
    console.log( "Result DELETE Promise Failed!");
});
var resultPromise= jamCoreLib.RESTConnector.get("website");
resultPromise.then(function( data, textStatus, jqXHR ) {
    console.log(data);
}, function() {
    console.log( "Result GET Promise Failed!");
});
var resultPromise= jamCoreLib.RESTConnector.get("website", 1);
resultPromise.then(function( data, textStatus, jqXHR ) {
    console.log(data);
}, function() {
    console.log( "Result SINGLE GET Promise Failed!");
});
var resultPromise= jamCoreLib.RESTConnector.post("website", testObj);
resultPromise.then(function( data, textStatus, jqXHR ) {
    console.log(data);
}, function() {
    console.log( "Result POST Promise Failed!");
});
var resultPromise= jamCoreLib.RESTConnector.put("website", testObj);
resultPromise.then(function( data, textStatus, jqXHR ) {
    console.log(data);
}, function() {
    console.log( "Result PUT Promise Failed!");
});
*/