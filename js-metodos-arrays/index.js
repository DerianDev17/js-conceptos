const names = ['ryan', 'jose', 'maria'];
const names1 = ['marco', 'juan', 'mario'];


 const newNames = names.map(function (name) {
    // console.log(name);
    return `hola ${name}`
});

console.log(newNames);

const namefound = names.find(function (name) {
    // console.log(name);
    // return `hola ${name}`
    if(name === 'jose'){
        return name
    }
});

console.log(namefound);

const newfound = names.filter(function (name) {

    if(name !== 'jose'){
        return name
    }
});

console.log(newfound);

console.log(names.concat(names1));