const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    let str = '';

    arr.length === 0 ? str = 'Семья пуста' : str = 'Семья состоит из ';

    arr.forEach(member => {
        str += `${member} `;
    });

    return str;
}
console.log(showFamily(family));


const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    favoriteCities.forEach(city => {
        console.log(city.toLowerCase());
    });
}

standardizeStrings(favoriteCities);