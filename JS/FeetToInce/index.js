
function woodCalculator(chairQuatity, tableQuantity, bedQuatity) {
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const chairWood = perChairWood * chairQuatity;
    const tableWood = perTableWood * tableQuantity;
    const bedWood = perBedWood * bedQuatity;

    return chairWood + tableWood + bedWood;
    
}

const totalWood = woodCalculator(2,4,50);
console.log(totalWood);
