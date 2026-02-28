"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function ex4() {
    var isLoggedIn = true;
    if (isLoggedIn) {
        return React.createElement("h2", null, "Welcome User");
    }
    else {
        return React.createElement("h2", null, "Please Login");
    }
}
exports.default = ex4;
