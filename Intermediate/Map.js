let double1=[1,2,3,4,5];
let num=double1.map((double1)=>double1*2);
console.log(num);

let peoples = [
  { firstName: "Macom", lastName: "Reynolds" },
  { firstName: "Kaylee", lastName: "Frye" },
  { firstName: "Jayne", lastName: "Cobb" },
];
const pe=peoples.map((p)=>{
    return [p.firstName,p.lastName];
})
console.log(pe);
