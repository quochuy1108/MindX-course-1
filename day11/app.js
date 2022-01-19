// let lists = document.getElementsByTagName('li')
// let form = document.getElementById('form')
// let listTo = document.querySelector('.listTo')


// for (let i = 0; i < lists.length; i++) {
//     lists[i].addEventListener("click",function(e){
//         if( e.target.style.textDecoration == 'line-through'){
//             e.target.style.textDecoration = 'none'
//             return
//         }
//         e.target.style.textDecoration = 'line-through'
//     })
// }

// form.addEventListener('submit', function(e){
//     e.preventDefault()
    
//     // truy cap input co name la data
//     if(form.data.value.trim() == ''){
//         return
//     }
//     // khoi tao li
//     let li = document.createElement('li')
//     li.innerText = form.data.value.trim()
//     // them su kien click vao the li
//     li.addEventListener('click', function(e){
//         if( e.target.style.textDecoration == 'line-through'){
//             e.target.style.textDecoration = 'none'
//             return
//         }
//         e.target.style.textDecoration = 'line-through'
//     })

//     // them the li vao cuoi ul
//     listTo.appendChild(li)
//      // endter mat value
//      form.data.value = ''
   
// })
