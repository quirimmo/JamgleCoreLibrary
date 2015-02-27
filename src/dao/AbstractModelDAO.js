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