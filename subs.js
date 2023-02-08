

const submissions = [
    {name:'Jane', score: 95, date: '2020-01-24', passed: true},
    {name: 'Joe', score: 77, date: '2018-05-14', passed: true},
    {name: 'Jack', score: 59, date: '2019-07-05', passed: false},
    {name: 'Jill', score: 88, date: '2020-04-22', passed: true},
];

function addSubmission(array, newName, newScore, newDate) {
    const pass = newScore >= 60 ? true : false;
    const newSubmission = {name: (newName), score: (newScore), date: (newDate), passed: (pass)};
    return array.push(newSubmission)
};

function deleteSubmissionByIndex(array, index) {
    return array.splice(index, 1)
};

function deleteSubmissionByName(array, name) {
    const nameSelect = array.findIndex(item => item.name === name)
    return array.splice(nameSelect, 1)
};


// function editSubmission(array, index, score) {
//     const subEdit = array.findIndex( => index === score)
    
// };
// editSubmission


function findSubmissionByName(array, name) {
    return array.find((item) => item.name === name)
};


// function findLowestScore(array) {
//     return array.forEach(Math.min(item.score)) 
// }
// console.log(findLowestScore(submissions));


// function findAverageScore(array) {

// };

// function filterPassing(array) {
//     return array.filter(item => (item.passed === false));
// };
// filterPassing(submissions);
// console.log(submissions)

// function filter90AndAbove(array) {
//     return array.filter(item => item.score >= 90)
// };
// filter90AndAbove(submissions);

console.log(submissions)

