let number = +prompt("Nhập số dương");
let n1=0, n2=1, next=0;
let sum=0;
while(sum + n1 <= number){
    console.log(n1);
    sum += n1;
    next = n1 + n2;
    n1 = n2;
    n2 = next;
}