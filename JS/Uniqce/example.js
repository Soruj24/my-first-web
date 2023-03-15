const names = ['a', 'a', 'b', 'b', 'c'];
function removeNames(names) {
    const uniqe = [];
    for (let i = 0; i < names.length; i++){
        const name = names[i];
        if (uniqe.includes(name) === false) {
            uniqe.push(name);
         }
    }
    return uniqe
}

const uniqe = removeNames(names);
console.log(uniqe);