//reverse a string  using inbuilt method, and without inbuilt.
var str= "akhilesh";
var rev = str.split("").reverse().join("");
console.log(rev);

//reverse a string without inbuilt method?
var str2= "SONWANI";
var rev2= "";
for(let i= str2.length-1; i>=0; i--)
{
rev2+= str2[i];
}
console.log(rev2);

//reverse string by passing argument in the function.

function m2(s2)
{
var s2= s2.split("").reverse().join("");
return s2;
}
console.log(m2("REVERSEME123"))

//reverse string by passing argument in the function and ignore the middle sapce for example    AKHI  LESH

function m3(re)
{
let newreverse = "";
for(let i=re.length-1; i>=0; i--)
{
if(re[i] !== " ")
{
newreverse+= re[i];
}
}
return newreverse;
}
console.log(m3("AKHI   LESH"));


//check palindrome
var nam= "madam";
var check = nam.split("").reverse().join("");
if(nam==check)
{
console.log("PALINDROME");
}
else{
    console.log("NOT PALINDROME");
}

//check palindrome by passing arguments in the function
function m1(s)
{
    let original = s;
let reversed = s.split("").reverse().join("");
if(s==reversed)
{
    return "palindrome";
}
else{
    return "not palindrome";
}
}
console.log(m1("MADdAM"));


//Count vowels in a string
let a="welcome"
let count=0;
let vowels= "aeiouAEIOU";
for(let i=0; i<a.length;i++)
{
if(!vowels.includes(a[i]))
{
count++;
}
}
console.log(count);


//Count vowels in a string by passing in the arguments and return it
var str3=(nam2)=>{
let vowels2= "aeiouAEIOU";
let count2=0;
for(let i=0;i<nam2.length;i++)
{
if(vowels2.includes(nam2[i]))
{
count2++;
}
}
return count2;

}
console.log(str3("woierld"));

// Count consonants in a string
var str4= "MY NAME IS AKHILESH SONWANI";
let count4=0;
let vowels3= "aeiouAEIOU";

for(let i=0; i<str4.length;i++)
{
if(!vowels3.includes(str4[i]))
{
count4++;
}
}
console.log(count4);
