const Park = function (name, ticketPrice){
    this.name = name
    this.ticketPrice = ticketPrice
    this.dinosaurs = []
}

Park.prototype.addDinosaur = function(newDinosaur){
    this.dinosaurs.push(newDinosaur)
}


Park.prototype.removeDinosaur = function(dinosaurToRemove) {
    const indexOfDino = this.dinosaurs.indexOf(dinosaurToRemove)
    if (indexOfDino > -1) {
        this.dinosaurs.splice(indexOfDino, 1)
    }
}

Park.prototype.findMostPopularDinosaur = function() {
    let mostPopularDinosaur = this.dinosaurs[0]
    for (let dinosaur of this.dinosaurs){
        if (dinosaur.guestsAttractedPerDay > mostPopularDinosaur.guestsAttractedPerDay) {
            mostPopularDinosaur = dinosaur
        }
    }
    return mostPopularDinosaur
}

Park.prototype.getDinosaursBySpecies = function(species){
    const dinosaursOfThisSpecies = []
    for (let dinosaur of this.dinosaurs){
        if (dinosaur.species === species){
            dinosaursOfThisSpecies.push(dinosaur)
        }
    }
    return dinosaursOfThisSpecies
}

Park.prototype.getTotalVisitorsForDay = function() {
    let totalVisitorsForDay = 0
    for (let dinosaur of this.dinosaurs){
        totalVisitorsForDay += dinosaur.guestsAttractedPerDay
    }
    return totalVisitorsForDay
}

Park.prototype.getTotalVisitorsForYear = function() {
    const visitorsForDay = this.getTotalVisitorsForDay()
    const visitorsForYear = (visitorsForDay * 365)
    return visitorsForYear

}

Park.prototype.getTotalRevenueForYear = function() {
    const visitorsForYear = this.getTotalVisitorsForYear()
    const totalRevenueForYear = (visitorsForYear * this.ticketPrice)
    return totalRevenueForYear
}

Park.prototype.removeDinosaursBySpecies = function(species) {
    const dinosaursOfThisSpecies = this.getDinosaursBySpecies(species)
    for (let dinosaur of this.dinosaurs) {
        if (dinosaursOfThisSpecies.includes(dinosaur)){
            this.removeDinosaur(dinosaur)
        }
    }
}

Park.prototype.getAllDietsOfDinosaurs = function() {
    const listOfDiets = []
    for (let dinosaur of this.dinosaurs) {
        let dinoDiet = dinosaur.diet
        let dietAlreadyInList = listOfDiets.includes(dinoDiet)
        if (!dietAlreadyInList) {
            listOfDiets.push(dinoDiet)
        }
    }
    return listOfDiets
}

Park.prototype.getDinosaursByDiet = function(diet){
    const dinosaursOfThisDiet = []
    for (let dinosaur of this.dinosaurs){
        if (dinosaur.diet === diet){
            dinosaursOfThisDiet.push(dinosaur)
        }
    }
    return dinosaursOfThisDiet
}

Park.prototype.getDietsAndDinosaurs = function() {
    //this function needs to:
    //create an empty object DONE
    //get list of diets DONE
    //insert every diet as a key DONE??
    //get dinosaurs by diet for each diet DONE
    //insert every length as the value DONE
    //return this object DONE
    const dietsAndDinosaursObject = {}
    const listOfDiets = this.getAllDietsOfDinosaurs()
    listOfDiets.forEach((key) => {
        dietsAndDinosaursObject[key] = null
    })
    for (let diet of listOfDiets) {
        const dinosByDiet = this.getDinosaursByDiet(diet)
        const numberInList = dinosByDiet.length
        dietsAndDinosaursObject[diet] = numberInList
    }
    return dietsAndDinosaursObject
}


module.exports = Park;