/* JamgleCoreLibrary main */
/* global $:false */


var JamgleCoreLibrary = function() {
    
    this.RESTConnector= new RESTConnector();
    
};

// Version.
JamgleCoreLibrary.VERSION = '0.0.1';

// Export to the root, which is probably `window`.
root.JamgleCoreLibrary = JamgleCoreLibrary;



var jamCoreLib = new JamgleCoreLibrary();










/*

var testObj= {
    author: "PIPPA PEGGGGGGGGGGGG", 
    creationDate: 1424708822430,
    description: "djsad alkdj lakjdasljlljaldljdsaljda",
    id: 12,
    name: "Quirino's WebSite",
    url: "www.quirino.it"
};





var webDAO = new WebsiteDAO();
var resultPromise= webDAO.save(testObj);
resultPromise.then(function( data, textStatus, jqXHR ) {
    console.log(data);
}, function() {
    console.log( "Result SAVE Promise Failed!");
});

var resultPromise= webDAO.delete(1);
resultPromise.then(function( data, textStatus, jqXHR ) {
    console.log(data);
}, function() {
    console.log( "Result DELETE Promise Failed!");
});
*/

/*
var resultPromise= webDAO.findAll();
resultPromise.then(function( data, textStatus, jqXHR ) {
    console.log(data.data);
}, function() {
    console.log( "Result SINGLE GET Promise Failed!");
});
*/


/*
var resultPromise= webDAO.find(1);
resultPromise.then(function( data, textStatus, jqXHR ) {
    var websiteModel= new WebsiteModel();
    websiteModel= data.data[0];
    console.log(websiteModel.description);
}, function() {
    console.log( "Result SINGLE GET Promise Failed!");
});
*/



/*
var resultPromise= jamCoreLib.RESTConnector.get("website", 1);
resultPromise.then(function( data, textStatus, jqXHR ) {
    var websiteModel= new WebsiteModel();
    websiteModel= data.data[0];
    console.log(websiteModel.author);
}, function() {
    console.log( "Result SINGLE GET Promise Failed!");
});
*/




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