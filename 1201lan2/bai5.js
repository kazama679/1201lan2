let random = Math.floor((Math.random() * 10) +1);
console.log("số cần tìm = "+random);
let number;
do{
    number = +prompt("Nhập số");
    if(random==number){
        console.log("số bạn nhập bằng số ngẫu nhiên của chúng tôi");
    } else if(random>number){
        console.log("số bạn nhập nhỏ hơn số ngẫu nhiên của chúng tôi");
    } else{
        console.log("số bạn nhập lớn hơn số ngẫu nhiên của chúng tôi");
    }
} while(number!=random);