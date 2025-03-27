// Create a separate group for consecutive ascending numbers from the given
// string. ex: 1235689. Output : 123 56 89
const prompt=require("prompt-sync")();
num=prompt("Enter String  ex: 1235689 :")
str=""
for(i=0;i<num.length;i++){
    console.log("diffrence:",`${num[i+1]}-${num[i]}=${num[i+1]-num[i]}`)
    str+=num[i]
    if(num[i+1]-num[i]==2){
        str+=" "       
    }
    console.log(str)
}


