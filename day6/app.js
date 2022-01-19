// let products = [
//     {
//         id: 1,
//         name: 'Bánh mì nho',
//         price: 20000
//     },
//     {
//         id: 2,
//         name: 'Trứng vỏ xanh',
//         price: 80000
//     },
//     {
//         id: 3,
//         name: 'Xúc xích',
//         price: 30000
//     },
//     {
//         id: 4,
//         name: 'Kem',
//         price: 10000
//     },
// ]

// let carts = [
//     {
//         soLuong: 2,
//         id: 3
//     },
//     {
//         soLuong: 5,
//         id: 1
//     },
// ]
// let total = 0;
// let thanhTien = carts.forEach(function(cart){
//     let findProduct = products.find(function(value){
//         return value.id == cart.id;
//     })
//     total += cart.soLuong * findProduct.price
// })
// console.log(total);

// let num = [2,3,5,7,8];


// let tich = num.reduce(function(a,b){
//     return a*b
// },1)
// console.log(tich);

let a = [1,2,3,4,5];
console.log(a);
let b = [10,20, ...a];
// b[0] = 10;
console.log(b);


let x = {
    id: 100
}

let y = Object.assign({name: 'HUY'}, x);
y.id = 1000
console.log(y);
console.log(x);






