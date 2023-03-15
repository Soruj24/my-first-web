function add(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return 'Pealce Enter Numbar';
    }
    return num1 + num2;
}

let total = add(12, 45);
console.log(total);