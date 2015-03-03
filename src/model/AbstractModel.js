var AbstractModel = function() {
    console.log("Initializing Abstract Model");
};



/**
Abstract Method in order to create an instance of the model. You need to implement this method in your Concrete Model Implementation
**/
AbstractModel.prototype.buildModelInstance= function(data){
    console.log("Abstract Buil Model Method: You need to implement the right one in your concrete model implementation");
    var modelInstance= {
    };
    return modelInstance;
}