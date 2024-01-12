let number = +prompt("Nhập số nguyên");
for(let i=1; i<=number; i++){
    let row= '';
    for(let j=1; j<=i; j++){
        row += '* ';
    }
    console.log(row);
}
for(let i=1; i<=number; i++){
    let row= '';
    for(let j=1; j<=number; j++){
        if(j<=number-i){
            row += '  ';
        } else{
            row += '* ';
        }
    }
    console.log(row);
}