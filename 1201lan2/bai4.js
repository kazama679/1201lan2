let a = +prompt("nhập a dương");
let b = +prompt("nhập b dương");
let check =0;
for(let i=1; i<=a; i++){
    if(i%b==0){
        console.log(i+" chia hết cho "+b);
        check +=i;
    }
}
if(check==0){
    console.log("từ 1 đến "+a+" k có số nào chia hết cho "+b);
}