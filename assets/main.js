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
        puntiFatti: 0,
        falliSubiti:0
    },
        {
        name:'Inter',
        puntiFatti: 0,
        falliSubiti:0
    },
        {
        name:'Milan',
        puntiFatti: 0,
        falliSubiti:0
    },
        {
        name:'Napoli',
        puntiFatti: 0,
        falliSubiti:0
    },
        {
        name:'Como',
        puntiFatti: 0,
        falliSubiti:0
    },

]
console.log(soccerTeams);
for (let i = 0; i < soccerTeams.length; i++) {
    const team = soccerTeams[i];
    team.falliSubiti=getRndInteger(1,100)
    team.puntiFatti=getRndInteger(1,100)
    
}

const newTeams= []
for (let i = 0; i < soccerTeams.length; i++) {
    const team = soccerTeams[i];
    const newObj={
        name:team.name,
        falliSubiti:team.falliSubiti
    }
    newTeams.push(newObj)

    
}

console.log(newTeams);


 function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}