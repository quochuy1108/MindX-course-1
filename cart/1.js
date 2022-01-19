const a = '1234'
let b = ''


const change = (a) => {
    const arr = a.split('')
    const user = arr.map(item => item = '*').join('')
    console.log(user);
    return user
}

console.log(change(a));

