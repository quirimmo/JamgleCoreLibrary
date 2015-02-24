var AbstractModel = function() {
    console.log("Initializing Abstract Model");
    this.resourceName;
};


AbstractModel.prototype.setupModelProperties= function(resourceName){
    this.resourceName= resourceName;
}