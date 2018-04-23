var express = require('express');
var router = express.Router();
const Houses = require('../models/index').house;

function getBodyParams(req){
    const { name, sigil, region } = req.body;
    return {
            name,
            sigil,
            region
        }
    }

// INDEX 
router.get('/', function(req,res){
    House.findAll() 
        .then(function(houses) {
            res.send(houses);
        });
}); 

// SHOW 
router.get('/', function(req,res){
    House.findById(req.params,id)
        .then(function(house) {
            res.send(house);
        });
});

// CREATE
router.post('/', function(req,res){
    House.create(getBodyParams(req))
        .then(function(house){
            res.send(house);
        });
});

// UPDATE
router.put('/:id', function(req,res){
    House.findById(req.params.id)
        .then(function(house) {
            house.update(getBodyParams(req))
                .then(function(updateHouse) {
                    res.send(updateHouse)
                })
        })
})

// DESTROY
router.delete('/:id', function(req, res) {
    House.findById(req.params.id)
        .then(function(house){
            house.destroy();
            console.log('HOUSE DESTORYED');
        })
})

module.exports = router;