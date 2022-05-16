const data = [
    {
        id: 1,
        name: 'aimee Zank',
        age: 25,
        marks: 500,
        percentage: 95
    },
    {
        id: 2,
        name: 'Jenette Flanders',
        age: 20,
        marks: 260,
        percentage: 85
    },
    {
        id: 3,
        name: 'Corliss Zuk',
        age: 26,
        marks: 300,
        percentage: 90
    },
    {
        id: 4,
        name: 'Salena Olmos',
        age: 24,
        marks: 450,
        percentage: 87
    },
    {
        id: 5,
        name: 'Denisha Cast',
        age: 22,
        marks: 250,
        percentage: 92
    },
]

const result = data.filter((item) => {
    if (item.percentage == 95)
        return item
})

console.log(result)
