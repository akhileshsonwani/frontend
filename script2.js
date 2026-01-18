//move all zeroes to the end while keeping non-zero order same
let a= [1,0,2,3,0,5,7,0,9];
let answer=[];
for(let i=0; i<a.length; i++)
{
if(a[i] !==0)
{
answer.push(a[i]);
}
}   
console.log(answer);