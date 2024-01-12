let number = +prompt("nhập số");
let check = 1;
for(let i=2; i<number; i++){
    if(number%i==0){
        check += i;
    }
}
if(check==1){
    console.log(number+" là số nguyên tố");
} else{
    console.log(number+" k là số nguyên tố");
}