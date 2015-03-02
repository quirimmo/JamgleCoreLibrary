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
};



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
};


var WebsiteModel = function() {
    console.log("Initializing Website Model");
};

WebsiteModel.prototype = new AbstractModel();


WebsiteModel.prototype.buildModelInstance= function(){
    
    var modelInstance= {
        author: "PIPPA PEGGGGGGGGGGGG", 
        creationDate: 1424708822430,
        description: "djsad alkdj lakjdasljlljaldljdsaljda",
        id: 12,
        name: "Quirino's WebSite",
        url: "www.quirino.it"
    };
    
    return modelInstance;
}

var AbstractModelDAO = function() {
    console.log("Initializing Abstract Model DAO");
    this.resourceName;
};


AbstractModelDAO.prototype.setupResourceProperties= function(resourceName){
    this.resourceName= resourceName;
};


AbstractModelDAO.prototype.find= function(modelId){
    var resultPromise= jamCoreLib.RESTConnector.get(this.resourceName, modelId);
    return resultPromise;
};


AbstractModelDAO.prototype.findAll= function(){
    var resultPromise= jamCoreLib.RESTConnector.get(this.resourceName);
    return resultPromise;
};


AbstractModelDAO.prototype.delete= function(modelId){
    var resultPromise= jamCoreLib.RESTConnector.delete(this.resourceName, modelId);
    return resultPromise;
};


AbstractModelDAO.prototype.update= function(jsObject){
    var resultPromise= jamCoreLib.RESTConnector.post(this.resourceName, jsObject);
    return resultPromise;
};


AbstractModelDAO.prototype.save= function(jsObject){
    var resultPromise= jamCoreLib.RESTConnector.put(this.resourceName, jsObject);
    return resultPromise;
};

var WebsiteDAO = function() {
    console.log("Initializing Website DAO");
    this.setupResourceProperties("website");
};

WebsiteDAO.prototype = new AbstractModelDAO();

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


var websiteModel= new WebsiteModel();
var websiteModelObj= websiteModel.buildModelInstance();
console.log(websiteModelObj.description);







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

}(this));
