const names = ['a', 'b', 'c', 'a', 'b', 'c'];
function removeNames() {
    const uniqe = [];
    for (let i = 0; i < names.length; i++){
        const name = names[i];
        if (uniqe.includes(name) === false) {
            uniqe.push(name);
        }
    }
    return uniqe;
}

const uniqename = removeNames(names);
console.log(uniqename);