
var a = prompt('Nhập số a');
var b = prompt('Nhập số b');
console.log('a =', a);
console.log('b =', b);

// BCNN
if(a != b){
    // BCNN
    for (let i = 1; i < a*b; i++) {
        if(i % parseInt(a) == 0 && i % parseInt(b) == 0){
            console.log('BCNN của ' + a + ' và ' + b + ' là ' + i);
           break;
        }
    }
    // UCLN
    for (let j = a; j < a*b; j--) {
        if(parseInt(a) % j == 0 && parseInt(b) % j == 0){
            console.log('UCLN của ' + a + ' và ' + b + ' là ' + j);
            break
        }
    }
}

