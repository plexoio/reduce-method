let students = [
    {
        name: 'John',
        subjects: ['maths', 'english', 'cad'],
        teacher: { maths: 'Harry', english: 'Joan', cad: 'Paul' },
        results: { maths: 90, english: 75, cad: 87 },
    },
    {
        name: 'Emily',
        subjects: ['science', 'english', 'art'],
        teacher: { science: 'Iris', english: 'Joan', art: 'Simon' },
        results: { science: 93, english: 73, art: 95 },
    },
    {
        name: 'Adam',
        subjects: ['science', 'maths', 'art'],
        teacher: { science: 'Iris', maths: 'Harry', art: 'Simon' },
        results: { science: 93, english: 88, maths: 97, art: 95 },
    },
    {
        name: 'Frank',
        subjects: ['science', 'english', 'art'],
        teacher: { science: 'Iris', english: 'Joan', art: 'Simon' },
        results: { science: 93, english: 87, art: 95 },
    }
];

// const spot = result => result.english >= 88;
// const innerFilter = students.results.filter(spot).length > 0;
// const myBestStudent = students.filter(innerFilter);

// // const innerFilter = students.results.filter(spot).length > 0;
// const spot = student => student.results.english >= 88;
// const myBestStudent = students.filter(spot);

const biggest = students.reduce((start, object) => {
    const myName = 'name';
    const myScore = 'max';
    let myStudent = object.results.english;
    if (myStudent >= 88) {
        start[myName] = object.name;
        start[myScore] = myStudent;
    }
    return start
}, {});

console.log(biggest);

// OR

const biggest2 = students.reduce((acc, cur) => {
    acc = acc.max > cur.results.english ? acc: {name:cur.name, max:cur.results.english};
    return acc;
    }, {name: '', max: 0});
console.log(biggest2);

/* Using destructuring 
const biggest = students.reduce(({max, name}, {name:n, results:{english}}) => {
    if(max < english) {
        acc = {name:n, max: english};
    }
    return acc;
    }, {name: '', max: 0});
    
console.log(biggest);
*/
