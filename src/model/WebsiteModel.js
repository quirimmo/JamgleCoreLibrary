var WebsiteModel = function() {
    console.log("Initializing Website Model");
};

WebsiteModel.prototype = new AbstractModel();


/**
Method used in order to instance a model object, passing the right parameters when calling the method 
**/
WebsiteModel.prototype.buildModelInstance= function(author, creationDate, description, id, name, url){
    
    var modelInstance= {
        author: author, 
        creationDate: creationDate,
        description: description,
        id: id,
        name: name,
        url: url
    };
    
    return modelInstance;
    
}