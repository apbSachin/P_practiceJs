//obj1=[{a:1,b:2}];
//obj2=[{b:5,d:4}];
//output:[{a:1,b:5,c:4}];

const obj1=[{a:1,b:2}];
const obj2=[{b:5,d:4}];

const result=obj1.map((value,index)=>{
    const item=obj2[index];
    const merged={...value,...item}
    return merged;
})

console.log(result);