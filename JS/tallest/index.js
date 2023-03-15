function maxInArray(nambars) {
    let largest = nambars[0];
    for (let i = 0; i < nambars.length; i++){
        const index = i;
        const element = nambars[index];
        if (element > largest) {
            largest = element
        }
    }
    return largest;
}

const heghts = [93, 45, 56, 34, 45];
let total = maxInArray(heghts);
console.log(total);

