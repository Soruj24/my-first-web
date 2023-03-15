const names = ['a','b', 'd', 'h', 'e', 't', 'a', 'b','a','g'];
function removeDuplicate(names) {
    const unicqe = [];
    for (let i = 0; i < names.length; i++){
        const name = names[i];
        if (unicqe.includes(name) === false) {
            unicqe.push(name);
        }
    }
    return unicqe;
}
const unicqeNames = removeDuplicate(names);
console.log(unicqeNames);