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