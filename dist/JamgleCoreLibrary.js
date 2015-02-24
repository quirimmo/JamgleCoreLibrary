(function(root, undefined) {

  "use strict";


var REST_SERVICE_BASE_ADDRESS= "http://localhost:8080/MavenGitResteasyWeb-1.0-SNAPSHOT/rest/";
var REST_SERVICE_VERSION= "";
var REST_SERVICE_BASE_PATH= REST_SERVICE_BASE_ADDRESS + REST_SERVICE_VERSION;


var RESTConnector = function() {
};



RESTConnector.prototype.connect= function(resourceURL, requestType, jsonData){
    return $.when( 
        $.ajax({
            type: requestType,
            url: resourceURL,
            data: jsonData,
            crossDomain: true,
            dataType: "json",
            contentType: 'application/json; charset=utf-8'
        })
    );
};


RESTConnector.prototype.getRequestID= function(idItem){
    var idURL= "";
    idItem = (typeof idItem !== 'undefined') ? idItem : 'undefined';
    if(idItem!=='undefined'){
        idURL= "?id=" + idItem;
    }
    return idURL;
}



RESTConnector.prototype.get= function(resourceAPI, idItem){
    var idURL= this.getRequestID(idItem);
    return this.connect(REST_SERVICE_BASE_PATH + resourceAPI + idURL, "GET");
};

RESTConnector.prototype.delete= function(resourceAPI, idItem){
    var idURL= this.getRequestID(idItem);
    return this.connect(REST_SERVICE_BASE_PATH + resourceAPI + idURL, "DELETE");
};

RESTConnector.prototype.post= function(resourceAPI, jsObject){
    var jsonObject= JSON.stringify(jsObject);
    return this.connect(REST_SERVICE_BASE_PATH + resourceAPI, "POST", jsonObject);
};

RESTConnector.prototype.put= function(resourceAPI, jsObject){
    var jsonObject= JSON.stringify(jsObject);
    return this.connect(REST_SERVICE_BASE_PATH + resourceAPI, "PUT", jsonObject);
};

var AbstractModel = function() {
    console.log("Initializing Abstract Model");
    this.resourceName;
};


AbstractModel.prototype.setupModelProperties= function(resourceName){
    this.resourceName= resourceName;
}

var WebsiteModel = function() {
    console.log("Initializing Website Model");
    this.setupModelProperties("website");
};

WebsiteModel.prototype = new AbstractModel();

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



var resultPromise= jamCoreLib.RESTConnector.get("website", 1);
resultPromise.then(function( data, textStatus, jqXHR ) {
    var websiteModel= new WebsiteModel();
    websiteModel= data.data[0];
    console.log(websiteModel.author);
}, function() {
    console.log( "Result SINGLE GET Promise Failed!");
});





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

}(this));
