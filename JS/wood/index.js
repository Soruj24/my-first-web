function woodCalculator(chairQuatity, tableQuatity, bedQuatity) {
    const perChairWood = 3;
    const perTableWood = 5;
    const perBedWood = 50;
    
    const chairWood = perChairWood * chairQuatity;
    const tableWood = perTableWood * tableQuatity;
    const bedWood = perBedWood * bedQuatity;

    const total = chairWood + tableWood + bedWood;
    return total;
}

const totalWood = woodCalculator(30, 5, 67);
console.log(totalWood);