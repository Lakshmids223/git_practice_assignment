//prime number or not
let count=0;
for(let i=0;i<=4;i++){
    if(4%i==0){
        count++;
    }
}
if(count==2){
    console.log("Yes");
}else{
    console.log("No");
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