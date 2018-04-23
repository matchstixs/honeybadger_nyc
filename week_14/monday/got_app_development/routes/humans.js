var express = require('express');
var router = express.Router();
const Humans = require('../models/index').human;

function getBodyParams(req){
    const { name, age, status, portrait } = req.body;
    return {
            name,
            age,
            status,
            portrait
        }
    }

// INDEX 
router.get('/', function(req,res){
    Human.findAll() 
        .then(function(humans) {
            res.send(humans);
        });
}); 

// SHOW 
router.get('/', function(req,res){
    Human.findById(req.params,id)
        .then(function(human) {
            res.send(human);
        });
});

// CREATE
router.post('/', function(req,res){
    Human.create(getBodyParams(req))
        .then(function(human){
            res.send(human);
        });
});

// UPDATE
router.put('/:id', function(req,res){
    Human.findById(req.params.id)
        .then(function(human) {
            human.update(getBodyParams(req))
                .then(function(updateHuman) {
                    res.send(updateHuman)
                })
        })
})

// DESTROY
router.delete('/:id', function(req, res) {
    Human.findById(req.params.id)
        .then(function(human){
            human.destroy();
            console.log('HUMAN DESTORYED');
        })
})


module.exports = router;