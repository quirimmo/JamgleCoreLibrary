var WebsiteModel = function() {
    console.log("Initializing Website Model");
    this.setupModelProperties("website");
};

WebsiteModel.prototype = new AbstractModel();