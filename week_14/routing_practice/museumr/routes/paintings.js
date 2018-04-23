import { log } from 'util';

var express = require('express');
var router = express.Router();
const Paintings = require('../models/index').painting;

function getBodyParams(req) {
    const { title, img_url, year_made }
    return {
            name,
            img_url,
            year_made
    };
};

// Create
router.post('/', function(req,res){
    Painting.create(getBodyParams(req))
        .then(function(painting){
            res.send(painting)
        });
});

// Reveal
router.get ('/', function(req,res){
    Painting.findById(req.params.id)
        .then(function(painting){
            res.send(painting)
        });
});

// Update
router.put('/:id', function(req,res){
    Painting.findById(req.params.id)
        .then(function(painting){
            painting.update(getBodyParams(req))
            .then(function(updatePainting){
                res.send(updatePainting)
            });
        });
});

// Delete
router.delete('/:id', function(req,res) {
    Painting.findById(req.params.id)
        .then(function(painting){
            painting.destroy()
            console.log("PAINTING DESTROYED")
        });
});

// Endex
router.get('/', function(req,res){
    Painting.findAll()
        .then(function(paintings){
            res.send(paintings)
        });
});

module.exports = router;