const arr = [
{ id: 1, name: "Вася" },
{ id: 2, name: "Петя" },
{ id: 1, name: "Вася" },
];

const set = new Set();

arr.map((i) => {
    if (set.has(i.id)) return; 
    set.add(i.id)
});

const uniqueArr = Array.from(set).map(id => arr.find((i) => i.id === id));

console.log(uniqueArr);