let form = document.getElementById('form');
let lists = document.getElementById('lists');
let list_item = document.getElementsByTagName('li');




form.addEventListener('submit', function(e){
    e.preventDefault();
    let li = document.createElement('li');
    li.innerText = form.data.value.trim();
    lists.appendChild(li)
   li.addEventListener('click', function(e){
       if( e.target.style.textDecoration == 'line-through'){
        e.target.style.textDecoration = 'none';
            return
       }
       e.target.style.textDecoration = 'line-through'
   })
   if(form.data.value.trim() == ''){
       return
   }

   form.data.value = ''
})

for (let i = 0; i < list_item.length; i++) {
    list_item[i].addEventListener('click', function(e){
        if(e.target.style.textDecoration == 'line-through'){
            e.target.style.textDecoration = 'none';
            return
        }
        e.target.style.textDecoration = 'line-through'
    })
    
}


