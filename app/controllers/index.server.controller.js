/*
File Name: index.server.controller.js
Student's Name: Augusto Salles Schmitt
Student ID: 301245327
Date: June 9th, 2023
*/

exports.render = function(req, res) {
    res.render('index', {
        title: 'Hello World'
    })
};