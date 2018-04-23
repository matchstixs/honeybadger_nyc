var express = require('express');
var router = express.Router();
const Weapons = require('../models/index').weapon;

function getBodyParams(req){
    const { name, material, damage, accuracy } = req.body;
    return {
            name,
            material,
            damage,
            accuracy
        }
    }

// INDEX 
router.get('/', function(req,res){
    Weapon.findAll() 
        .then(function(weapons) {
            res.send(weapons);
        });
}); 

// SHOW 
router.get('/', function(req,res){
    Weapon.findById(req.params,id)
        .then(function(weapon) {
            res.send(weapon);
        });
});

// CREATE
router.post('/', function(req,res){
    Weapon.create(getBodyParams(req))
        .then(function(weapon){
            res.send(weapon);
        });
});

// UPDATE
router.put('/:id', function(req,res){
    Weapon.findById(req.params.id)
        .then(function(weapon) {
            weapon.update(getBodyParams(req))
                .then(function(updateWeapon) {
                    res.send(updateWeapon)
                })
        })
})

// DESTROY
router.delete('/:id', function(req, res) {
    Weapon.findById(req.params.id)
        .then(function(weapon){
            weapon.destroy();
            console.log('WEAPON DESTORYED');
        })
})

module.exports = router;