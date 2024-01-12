let number = +prompt("Nhập số");
let check = 0;
for(let i = 1; i<number; i++){
    if(number%i==0){
        check += i;
    }
}
if(number == check){
    console.log("số "+number+" là số hoàn hảo");
} else{
    console.log("không phải số hoàn hảo");
}