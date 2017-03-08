var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({ extended: false });
var fs = require('fs');
var Promise = require('bluebird');



router.route("/iamtheqmc")
.get(function(request, response)
{
    response.send("All your QMC are belong to us!")
});


module.exports = router;