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