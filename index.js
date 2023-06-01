"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var COMMENTS_URL = "https://jsonplaceholder.typicode.com/comments";
var getData = function (url) {
    var config = { method: "GET" };
    return fetch(url, config).then(function (response) { return response.json(); });
};
getData(COMMENTS_URL).then(function (data) {
    if (data.length > 0) {
        data.forEach(function (comment) {
            return console.log("ID: ", comment.id, "Email: ", comment.email);
        });
    }
});
/**
 * ID: 1, Email: Eliseo...
 * ID: 2, Email: Jayne_Kuhic...
 * ID: 3, Email: Nikita...
 * ID: 4, Email: Lew...
 * ...
 */
