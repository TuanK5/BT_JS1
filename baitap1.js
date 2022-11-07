// bài1 chan le
let v=3;
if(v%2==0)
console.log('so chan')
else
console.log('so le')
// bài 2 so lon nhat
var a= 3;
var b= 2;
var c= 1;
if ((a>b)&&(a>c))
console.log('a lon')
else{
if ((b>c))
console.log('b lon')
else (c>b)
console.log('c lon')}
// Bài 3 giai thừa

// cách 1 day la cach dung For
let n=b=5; 
for(i=1;i<n;i++)
b=b*i
console.log(b)

// // Cách 2 đây là cách dùng while
// let c=5; 
// let b=1;
// let n=1
// while(n<=c){
//     b = b*n;
//     n++;
// }
// console.log(b)

// // Cách 3 đây là cách dùng do while
// let n=5 
// let b=1
// let i=1
// do{
//     b= b*i;
//     i++;
// }while(i <= n);
// console.log(b)

// Bài 4 in ra so chan tu 1 den n bằng while
let c=7
let b=1
while(b<=c)
{
    if (b%2==0)
    console.log(b)
    b++
}
// Bài 5 mảng for of và tổng số dương
let t=0
let array = [0,2,-4,8]
for (let a of array)
{if (a>0)
t+= a}
console.log(t);
