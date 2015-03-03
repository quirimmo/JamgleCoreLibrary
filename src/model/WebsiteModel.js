var WebsiteModel = function() {
    console.log("Initializing Website Model");
};

WebsiteModel.prototype = new AbstractModel();


/**
Method used in order to instance a model object, passing the right parameters when calling the method 
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
*/


/**
Method used in order to instance a model object, passing the right data parameters when calling the method
**/
WebsiteModel.prototype.buildModelInstance= function(data){
    
    var modelInstance= {
        id: data.id,
        name: data.name,
        description: data.description,
        creationDate: data.creationDate,
        author: data.author, 
        url: data.url
    };
    
    return modelInstance;
}