/* JamgleCoreLibrary main */
/* global $:false */


var JamgleCoreLibrary = function() {
    this.name="Quirino";
};


JamgleCoreLibrary.prototype.connect= function(){
    console.log("Connecting to REST Web Service");
    $.ajax({
        url: "http://localhost:8080/MavenGitResteasyWeb-1.0-SNAPSHOT/rest/website",
        crossDomain: true,
        dataType: "json"
    }).then(function(data) {
        console.log(data);
    });
};


JamgleCoreLibrary.prototype.say= function(){
    console.log("HELLO CIAO " + this.name);
};



// Version.
JamgleCoreLibrary.VERSION = '0.0.1';


// Export to the root, which is probably `window`.
root.JamgleCoreLibrary = JamgleCoreLibrary;




/** TESTING CODE **/

console.log("\n");
console.log($('body'));
var n = new JamgleCoreLibrary();
console.log("JAM CORE LIBRARY: " + n);
n.connect();
