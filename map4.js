const persons = [
    { name: "Malcom", age: "18" },
    { name: "Kaylee", age: "22" },
    { name: "Jayne", age: "25" }
];

const result = persons.map((item) => {
    console.log(item);
    console.log(item.name + '-' + item.age);
    // return item.name + '-' + item.age
})

// console.log(result)