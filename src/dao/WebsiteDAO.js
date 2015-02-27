var WebsiteDAO = function() {
    console.log("Initializing Website DAO");
    this.setupResourceProperties("website");
};

WebsiteDAO.prototype = new AbstractModelDAO();