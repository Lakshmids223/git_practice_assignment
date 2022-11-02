//prime number or not
let num = 5;
let count=0;
for(let i=1;i<=num;i++){
    if(num%i==0)
        count++
}
if(count==2){
    console.log("Prime");
}else{
    console.log("Not a Prime");
}




//palindrome
let str="madam";
let arr="";
for(let i=str.length-1;i>=0;i--){
    arr+=str[i];
    if(str[i]==arr){
    console.log("Yes");
    }else{
        console.log("No");
    }
}