//input obj=[1,2,3,4,5]; double values from array
const obj = [1, 2, 3, 4, 5, 6];
const result = obj.map((value, i) => {
    return value * 2;
})
console.log(result);


//input obj1=["sachin","tejas"]; convert into uppecase
const obj1=["sachin","tejas"];
const result1=obj1.map((value,i)=>{
    return value.toUpperCase();
})
console.log(result1);


//input arr=[1,2,"sachin",true,23] find length of array using map
const arr=["sachin","dsadsa"];
const res=arr.map((val,i)=>{
    return val.length;
})
console.log(res);
