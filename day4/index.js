// Array là 1 chuỗi giá trị liên tiếp trong bộ nhớ

// var a = [5,'hello', true, false, ];
// console.log(a);
// console.log('đô dài chuỗi : ', a.length);

// var i = 0
// while(i < a.length){
//     console.log(a[i]);
//     ++i;
// }

var a = 5;
var b = 8;
var c = 10;



function max(){
    if(a > b && a > c){
        console.log('Max' , a);
    }
    else if(b > a && b > c){
        console.log('Max',b);
    }
    else{
        console.log('Max',c);
    }
}
max()

var a = 7;
var b = 70;
var c = 72;
max()

function info(name, adress, sdt){
    console.log(name, adress, sdt);
}
// truyền nhiều tham số
info('Huy', 'Hà lội', 29)
info('Hạnh', 'Thài Nguyên', 00)
info('Hùng', 'Hải Dương', 34)

// function scopes, các biến khai báo trong function thì bên ngoài ko dùng dc, bên ngoài thì dùng vào function dc.

if(true){
    var x = 8
}
console.log(x);
// hoisting : lỗi tất cả các biến khai báo đều đẩy lên trên đầu , khó kiểm soát các biến, bộ nhớ

function add(a,b){
    let c = a + b;
    return c
}
let total = add(5,7) / 2
console.log(total);

let sum = function(a,b){
    return a + b
}
console.log(sum(5, 6));

// callback

var a = [5,'hello', true, false,'Huy' ];
for (let i = 0; i < a.length; i++) {
    if(a[i] == 'Huy'){
        console.log('Huy nằm ở vị trí', i +' trong mảng');
        
    }
    
}

// min, max
let num = [7,6,8,9,1,11]
// kĩ thuật cắm cờ
let Max = num[0]
for (let j = 1; j < num.length; j++) {
    if(Max < num[j]){
        Max = num[j];
    }
}
console.log(Max);
var mang2 = [1,2,3,4,5]
var mang = [];
for (let q = 0; q < 5; q++) {
    mang[q] = 'hello'
}
console.log(mang);
// thêm giá trị ở vị trí cuối mảng
mang.push(5)
console.log(mang);
// xóa giá trị ở vị trí cuối mảng
mang.pop()
console.log(mang);
// thêm giá trị ở vị trí đầu mảng
mang.unshift(555)
console.log(mang);
// xóa giá trị ở vị trí đầu mảng
mang.shift()
console.log(mang);
// gộp mảng
combine = mang.concat(mang2)
console.log(combine);












