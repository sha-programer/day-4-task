// 1>a print odd number in array using annonymous funtion
var r1 = [];
var t1 = function (arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      r1.push(arr[i]);
    }
  }
  return r1;
};
console.log(t1([1, 2, 3, 4, 5, 6, 7, 8, 9]));
// 1>a>1 print odd number in array using iife function
var r2 = [];
(function (arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      r2.push(arr[i]);
    }
  }
  console.log(r2);
})([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 23, 22]);

// 2>a print odd number in array using arrow function
var r3 = [];
var odd = (arr) => {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      r3.push(arr[i]);
    }
  }
  return r3;
};
console.log(odd([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 99, 65, 72, 34, 566, 433]));

// 1>b Convert all the strings to title caps in a string array in annonymous funtion
var s = function (s1) {
  s1 = s1.toLowerCase().split(" ");
  for (let i = 0; i < s1.length; i++) {
    s1[i] = s1[i].charAt(0).toUpperCase() + s1[i].slice(1);
  }
  return s1.join(" ");
};
console.log(s("hi iAm sHa"));

// 1>b>1 Convert all the strings to title caps in a string array in iife funtion
(function (s2) {
  s2 = s2.toLowerCase().split(" ");
  for (let i = 0; i < s2.length; i++) {
    s2[i] = s2[i].charAt(0).toUpperCase() + s2[i].slice(1);
  }
  console.log(s2.join(" "));
})("hi iAm sHa");
//2>b Convert all the strings to title caps in a string array in arrow funtion
var tittlecaps = (s3) => {
  s3 = s3.toLowerCase().split(" ");
  for (let i = 0; i < s3.length; i++) {
    s3[i] = s3[i].charAt(0).toUpperCase() + s3[i].slice(1);
  }
  return s3.join(" ");
};
console.log(tittlecaps("hI IaM sHa"));

//Sum of all numbers in an array in annonyous funtion
var sum_arr = function (arr1) {
  let sum = 0;

  for (let i = 0; i < arr1.length; i += 1) {
    sum += arr1[i];
  }

  return sum;
};

console.log(sum_arr([1, 14, 10, 39, -24]));
//Sum of all numbers in an array in iife funtion
(function (arr2) {
  let sum = 0;

  for (let i = 0; i < arr2.length; i += 1) {
    sum += arr2[i];
  }
  console.log(sum);
})([1, 14, 10, 39, -24]);
//Sum of all numbers in an array in arrow funtion
var sum_arr1 = (arr3) => {
  let sum = 0;
  for (let i = 0; i < arr3.length; i += 1) {
    sum += arr3[i];
  }
  return sum;
};
console.log(sum_arr1([1, 14, 10, 39, -24]));

//Return all the prime numbers in an array using annonymous function
let final=[]
let prime = function(arr13){
  for(var i=0;i<arr13.length;i++){
    let count = 0
    for(var j=2;j<arr13[i];j++){
      if(arr13[i]%j===0)
      {
        count=1
      }
    }
    if(count===0)
    {
      final.push(arr13[i])
    }
  }
  return final
}
console.log(prime([1,2,3,4,5,6,7]));
//Return all the prime numbers in an array using iife function
let final1=[];
(function(arr14){
  for(var i=0;i<arr14.length;i++){
    let count = 0
    for(var j=2;j<arr14[i];j++){
      if(arr14[i]%j===0)
      {
        count=1
      }
    }
    if(count===0)
    {
      final1.push(arr14[i])
    }
  }
  console.log(final1); 
}
)([1,2,3,4,5,6,7,8])
//Return all the prime numbers in an array using arrow function
let final2 =[];
let prime1=(arr15)=>{
  for(var i=0;i<arr15.length;i++){
    let count = 0
    for(var j=2;j<arr15[i];j++){
      if(arr15[i]%j===0)
      {
        count=1
      }
    }
    if(count===0)
    {
      final2.push(arr15[i])
    }
  }
  return final2
}
console.log(prime1([1,2,3,4,5,6,7,8]));

// Return all the palindromes in an array using annoynomus funtion
var palindromes = function (arr_p) {
  var p_res = [];
  for (let i = 0; i < arr_p.length; i++) {
    var pali = arr_p[i].split("").reverse().join("");
    if (pali === arr_p[i]) {
      p_res.push(arr_p[i]);
    }
  }
  return p_res;
};
console.log(palindromes(["sha", "aha", "dad", "tat"]));
// Return all the palindromes in an array using iife funtion
let p_res1 = [];
(function (arr_p1) {
  for (let i = 0; i < arr_p1.length; i++) {
    var pali1 = arr_p1[i].split("").reverse().join("");
    if (pali1 === arr_p1[i]) {
      p_res1.push(arr_p1[i]);
    }
  }
  console.log(p_res1);
})(["sha", "aha", "dad", "tat"]);

// Return all the palindromes in an array using arrow funtion
let p_res2 = [];
var pali2 = (arr_p2) => {
  for (let i = 0; i < arr_p2.length; i++) {
    var pali = arr_p2[i].split("").reverse().join("");
    if (pali === arr_p2[i]) {
      p_res2.push(arr_p2[i]);
    }
  }
  return p_res2;
};
console.log(pali2(["sha", "aha", "dad", "tat"]));

//Remove duplicates from an array using annonymous function
let arr16=[1,1,2,3,4,4,5,5,6,7,9]
let remove = function(arr16) {
  return arr16.filter((item,index)=>arr16.indexOf(item)===index);
  }
console.log(remove(arr16));

//Remove duplicates from an array using iife function
let arr17=[1,22,3,3,4,5,5,6];
(function(arr17){
  console.log(arr17.filter((item,index)=>arr17.indexOf(item)===index)); 
})(arr17)

//Return median of two sorted arrays of the same size using annonymous function.

  let arrm3 = [1, 3, 5, 7];
  let arrm4 = [2, 6, 4, 8];
  let m2 = function (arrm3,arrm4) {
  let arrm_5 = [...arrm3, ...arrm4];
  arrm_5.sort((a, b) => a - b);
  let n = arrm_5.length;
  if (n % 2 === 0) {
    return ((arrm_5[n / 2] + arrm_5[n - 1] / 2) / 2);
  }
 
}
console.log(m2(arrm3,arrm4));

//Return median of two sorted arrays of the same size using iife function.

(function (arr5,arr6) {
  let arr7=[...arr5,...arr6]
  arr7.sort((a,b)=>a-b)
  let n=arr7.length
  if (n%2===0) {
    console.log((arr7[n/2]+arr7[n-1]/2)/2);
    
  }
  
}
)([1,3,5,7],[2,4,6,8])
//Return median of two sorted arrays of the same size using arrow function.
let m3 = (arr8,arr9)=>{
  let arr10=[...arr8,...arr9]
  arr10.sort((a,b)=>a-b)
  let n = arr10.length
  if(n%2===0){
    return((arr10[n/2]+arr10[n-1]/2)/2)
  }
}
console.log(m3([1,3,5,7],[2,4,6,8]));
//Rotate an array by k times by annonymous function
let arr11 = [1,2,3,4,5]
let k = 4
let rotate = function(arr11,k){
  for (let i = 0;i<k;i ++) {
    arr11.push(arr11[i])    
  }
  for (let i = 0; i < k; i++) {
    arr11.shift()
    
  }
return arr11
}
console.log(rotate(arr11,k));
//Rotate an array by k times by iife function
(function (arr12,k1){
  for (let i = 0;i<k1;i ++) {
    arr12.push(arr12[i])    
  }
  for (let i = 0; i < k1; i++) {
    arr12.shift()
    
  }
  console.log(arr12);
}
)([1,2,3,4,5],3)