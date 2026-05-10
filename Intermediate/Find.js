const peoples = [
  { name: "huxn", age: 17 },
  { name: "john", age: 18 },
  { name: "alex", age: 20 },
  { name: "jimmy", age: 30 },
  { name: "alex", age: 30 },
];
const result=peoples.find((people)=>people.name==="alex");
console.log(result);
const ages = [3, 10, 18, 20];
r=ages.find((age)=>age>=18);
console.log(r);
