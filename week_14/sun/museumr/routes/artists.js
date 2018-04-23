var express = require('express');
var router = express.Router();
const Artists = require('../models/index').artist;

function getBodyParams(req) {
    const { name, img_url, nationality, birthYear, description }
    return {
            name,
            img_url,
            nationality,
            birthYear,
            description
    };
};

// Create
router.post('/', function(req,res) {
    Artist.create(getBodyParams(req))
        .then(function(artist){
            res.send(artist);
        });
});

// Reveal
router.get('/', function(req,res) {
    Artist.findById(req.params.id)
        .then(function(artist){
            res.send(artist);
        });
});

// Update
router.put('/:id', function(req,res) {
    Artist.findById(req.params.id)
        .then(function(artist){
            artist.update(getBodyParams(req))
            .then(function(updateArtist){
                res.send(updateArtist);
            });
        });
});

// Delete
router.delete('/:id', function(req,res){
    Artist.findById(req.params.id)
        .then(function(artist){
            artist.destroy();
            console.log("ARTIST FORGOTTEN WITH HISTORY");
        })
})

// Endex
router.get('/', function(req,res) {
    Artist.findAll()
        .then(function(artists){
            res.send(artists);
        });
});

module.exports = router;