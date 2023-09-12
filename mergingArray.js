//obj1=[{a:1,b:2}];
//obj2=[{b:5,d:4}];
//output:[{a:1,b:5,c:4}];

const obj1=[{a:1,b:2}];
const obj2=[{b:5,d:4}];

/**first appoach */

// const result=obj1.map((value,index)=>{
//     const item=obj2[index];
//     const merged={...value,...item}
//     return merged;
// })

/**second approach */
const result=obj1.map((value,index)=>{
    const item=obj2[index]; //inside the arrow func we retriev the obj2 using index this allow us to pair up the element from both arrar
    const merged=Object.assign(value,item)
    return merged;
})
console.log(result);