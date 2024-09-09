const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {

    let array = '';

    arr.forEach(function(n) {
        array += `${n} `;
    })

    return `Семья состоит из: ${array}`;
    
}

console.log(showFamily(family));



const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    arr.forEach(function(city) {
        console.log(city.toLowerCase())
    })
}

standardizeStrings(favoriteCities);