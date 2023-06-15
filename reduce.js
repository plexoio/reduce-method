/**
 * To run this file in Gitpod, use the 
 * command node reduce.js in the terminal
 */


// Summing an array of numbers:

const myNumbers = [0, 1, 2, 3, 4];
let myReduce = myNumbers.reduce((retain, next) => retain + next, 0);

// const myNumbers = [0, 1, 2, 3, 4];
// let myReduce = myNumbers.reduce((retain, next) => {
//     console.log(
//         'Accumulator:', retain,
//         'Current Value', next,
//         'Total:', retain + next
//     );
//     return retain + next;
// },10); // initializer can be other number e.g. '10'

// initializer could be: add more items to an array, inject more properties to an existing object

console.log(myReduce);

const teamMembers = [
    {
        name: 'Andrew',
        profession: 'Developer',
        yrsExperience: 5
    },
    {
        name: 'Ariel',
        profession: 'Developer',
        yrsExperience: 7
    },
    {
        name: 'Michael',
        profession: 'Designer',
        yrsExperience: 1
    },
    {
        name: 'Kelly',
        profession: 'Designer',
        yrsExperience: 3
    }
];

// Totaling a specific object property

const teamExp = teamMembers.reduce((initial, current) => initial + current.yrsExperience, 0);
console.log(teamExp);

// Grouping by a property, and totaling it too

let yearsProfession = teamMembers.reduce((initial, job) => {
  let key = job.profession;
  if (!initial[key]) {
    initial[key] = job.yrsExperience; // property - value relationship
  } else {
    initial[key] += job.yrsExperience; // increment of property value
  }
  return initial
},{});

console.log(yearsProfession);

// Reminder to create an object and add property-value pairs to it
let accTest = {
    hola:'this',
}

accTest['developer'] = 'yo';

console.log(accTest);