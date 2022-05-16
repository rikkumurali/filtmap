// const ages = [34, 18, 47, 55, 11, 9, 84]
// const abc = ages.filter(checkAdult);

// function checkAdult(ages) {
//     return ages >= 40;
// }

// console.log(abc);

const ages = [15, 44, 65, 31, 25]
const result = ages.filter(checkages)

function checkages(ages) {
    return ages <= 44;
}

console.log(result);