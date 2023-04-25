let arr = [
    { id: 0, name: "Mayank", age: 22 },
    { id: 1, name: "Yug", age: 17 },
    { id: 2, name: "Manthan", age: 16 },
]

arr = arr.filter((d)=>{
    return d.id!=1;
});

console.log(arr)