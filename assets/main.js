// . Snack 1

const racingBike =[
    {
        id:1,
        name:'Bianchi',
        weight: 10

    },
    {
        id:2,
        name: 'Scott',
        weight:7
    },
    {
        id:3,
        name:'Trek',
        weight:8 
    },
        {
        id:4,
        name:'Cannondale',
        weight:8.5 
    },
        {
        id:5,
        name:'Giant',
        weight:9 
    }
]
let bike= racingBike[0]
for (let i = 0; i < racingBike.length; i++) {
    const bikeWeight = racingBike[i];
    if (bikeWeight.weight<bike.weight) {
        bike=bikeWeight
    }
    
}
console.log(bike);



 // . Snack 2

const newSoccerTeams= []
 const soccerTeams = [
    {
        name:'Juventus',
        puntiFatti: getRndInteger(0,100),
        falliSubiti:getRndInteger(0,500)
    },
        {
        name:'Inter',
        puntiFatti: getRndInteger(0,100),
        falliSubiti:getRndInteger(0,500)
    },
        {
        name:'Milan',
        puntiFatti: getRndInteger(0,100),
        falliSubiti:getRndInteger(0,500)
    },
        {
        name:'Napoli',
        puntiFatti: getRndInteger(0,100),
        falliSubiti:getRndInteger(0,500)
    },
        {
        name:'Como',
        puntiFatti: getRndInteger(0,100),
        falliSubiti:getRndInteger(0,500)
    },

]
console.log(soccerTeams);
for(let i in soccerTeams){
    const allTeams= soccerTeams[i]
    delete allTeams.puntiFatti
    
}
 
newSoccerTeams.push(soccerTeams)
console.log(newSoccerTeams);



 
 function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}