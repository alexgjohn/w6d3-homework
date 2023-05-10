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

module.exports = Park;