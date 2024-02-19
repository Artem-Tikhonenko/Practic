const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

function sortStudentsByGroups(arr) {

    arr.sort();

    const a = [], b = [], c = [], d = [];

    for(let i = 0; i < arr.length; i++) {
        if (i < 3) {
            a.push(arr[i]);
        } else if (i < 6) {
            b.push(arr[i]);
        } else if (i < 9) {
            c.push(arr[i]);
        } else {
            d.push(arr[i]);
        }

    }

    return [a,b,c, `Оставшиеся студенты: ${d.length === 0 ? '-' : d.join(', ')}`];
}
console.log(sortStudentsByGroups(students));
// sortStudentsByGroups(students);