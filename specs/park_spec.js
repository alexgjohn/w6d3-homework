const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let dinosaur1
  let dinosaur2
  let dinosaur3
  let dinosaur4

  beforeEach(function () {
    park = new Park('Jurassic Park', 100000)
    dinosaur1 = new Dinosaur('t-rex', 'carnivore', 50)
    dinosaur2 = new Dinosaur('velociraptor', 'omnivore', 30)
    dinosaur3 = new Dinosaur('triceratops', 'herbivore', 40)
    dinosaur4 = new Dinosaur('t-rex', 'carnivore', 70)

  });

  it('should have a name', function(){
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic Park')
  });
  
  it('should have a ticket price', function(){
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 100000)
  });
    
  it('should have a collection of dinosaurs', function(){
    const actual = park.dinosaurs
    assert.deepStrictEqual(actual, [])
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.addDinosaur(dinosaur1)
    const actual = park.dinosaurs.length
    assert.strictEqual(actual, 1)
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.addDinosaur(dinosaur1)
    park.removeDinosaur(dinosaur1)
    const actual = park.dinosaurs.length
    assert.strictEqual(actual, 0)
  });
    

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    park.addDinosaur(dinosaur1)
    park.addDinosaur(dinosaur2)
    park.addDinosaur(dinosaur3)
    const actual = park.findMostPopularDinosaur()
    assert.strictEqual(actual, dinosaur1)
  });
  

  it('should be able to find all dinosaurs of a particular species', function(){
    park.addDinosaur(dinosaur1)
    park.addDinosaur(dinosaur2)
    park.addDinosaur(dinosaur3)
    park.addDinosaur(dinosaur4)
    results = park.getDinosaursBySpecies('t-rex')
    const actual = results.length
    assert.strictEqual(actual, 2)
  });

  it('should be able to calculate the total number of visitors per day', function(){
    park.addDinosaur(dinosaur1)
    park.addDinosaur(dinosaur2)
    park.addDinosaur(dinosaur3)
    const actual = park.getTotalVisitorsForDay()
    assert.strictEqual(actual, 120)
  });

  it('should be able to calculate the total number of visitors per year', function(){
    park.addDinosaur(dinosaur1)
    park.addDinosaur(dinosaur2)
    park.addDinosaur(dinosaur3)
    const actual = park.getTotalVisitorsForYear()
    assert.strictEqual(actual, 43800)
  });

  it('should be able to calculate total revenue for one year', function(){
    park.addDinosaur(dinosaur1)
    park.addDinosaur(dinosaur2)
    park.addDinosaur(dinosaur3)
    const actual = park.getTotalRevenueForYear()
    assert.strictEqual(actual, 4380000000)
  });
//extensions
  it('should be able to remove all dinosaurs of a certain species', function(){
    park.addDinosaur(dinosaur1)
    park.addDinosaur(dinosaur2)
    park.addDinosaur(dinosaur3)
    park.addDinosaur(dinosaur4)
    park.removeDinosaursBySpecies('t-rex')
    const actual = park.dinosaurs.length
    assert.strictEqual(actual, 2)
  });

  it('should be able to give a list of all the diets of its dinosaurs', function() {
    park.addDinosaur(dinosaur1)
    park.addDinosaur(dinosaur2)
    park.addDinosaur(dinosaur3)
    park.addDinosaur(dinosaur4)
    results = park.getAllDietsOfDinosaurs()
    const actual = results.length
    assert.strictEqual(actual, 3)
  });

  it('should be able to get all dinosaurs of a certain diet', function () {
    park.addDinosaur(dinosaur1)
    park.addDinosaur(dinosaur2)
    park.addDinosaur(dinosaur3)
    park.addDinosaur(dinosaur4)
    const carnivoreDinos = park.getDinosaursByDiet('carnivore')
    const actual = carnivoreDinos.length
    assert.strictEqual(actual, 2)
  })

  it('should be able to tell us how many dinosaurs subscribe to each diet', function(){
    park.addDinosaur(dinosaur1)
    park.addDinosaur(dinosaur2)
    park.addDinosaur(dinosaur3)
    park.addDinosaur(dinosaur4)
    const dietsAndDinosaurs = park.getDietsAndDinosaurs()
    const actual = dietsAndDinosaurs['carnivore']
    assert.strictEqual(actual, 2)
  });

});
