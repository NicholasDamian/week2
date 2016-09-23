var adventuringParty = {
    wizard: {
        health: 43,
        mana:   248,
    },
    warrior: {
        health: 206,
        mana: 0,
        weapons: [
            {   name: "Axe", damage: 50},
            {   name: "Bow", damage: 10, arrow:[
                { name: "1+ Arrow of Punishing", qty : 3},
                { name: "Wooden Arrows", qty: 40}
            ]}
        ]
    }
}

// console.log("Axe Damage: " + axeDamage);
adventuringParty.warrior.swingAxe = function(){
    var maxDamge =adventuringParty.warrior.weapons[0].damage;
    return Math.round( Math.random() * maxDamage)
}