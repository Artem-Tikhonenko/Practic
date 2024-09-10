const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

function sortStudentsByGroups(arr) {
    arr.sort();
    let a = [],
        b = [],
        c = [],
        rest = []

    arr.forEach((item, i) => {
        if(i < 3) {
            a.push(item);
        } else if (i < 6) {
            b.push(item);
        } else if (i < 9) {
            c.push(item);
        } else {
            rest.push(item);
        }
    });

    console.log([a,b,c, `Оставшиеся студенты: ${rest.length === 0 ? '-' : rest.join(', ')}`]);

}

sortStudentsByGroups(students);