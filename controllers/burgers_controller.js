var express = require("express");
var burger = require("../models/burger.js");


var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res){
    burger.selectAll(function(data){
        var hdbrsObj ={
            burgers:data
        };
        console.log(hdbrsObj);
        res.render("index", hdbrsObj);
    });
});