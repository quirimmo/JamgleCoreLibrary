(function(root, undefined) {

  "use strict";


/* JamgleCoreLibrary main */
/* global $:false */


var JamgleCoreLibrary = function() {
    this.name="Quirino";
};


JamgleCoreLibrary.prototype.say= function(){
    console.log("HELLO CIAO " + this.name);
};


console.log("\n");
console.log($('body'));


// Version.
JamgleCoreLibrary.VERSION = '0.0.1';


// Export to the root, which is probably `window`.
root.JamgleCoreLibrary = JamgleCoreLibrary;


}(this));
