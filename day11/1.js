let ul = document.getElementById('list');
let lists = document.getElementsByTagName('li');
let forms = document.getElementById('form');
let del = document.getElementsByClassName('del')
// luu du lieu vao trong []

for (let i = 0; i < lists.length; i++) {
    lists[i].addEventListener('click',function(e){
        if(e.target.style.textDecoration == 'line-through'){
            e.target.style.textDecoration = 'none'
            return
        }
       e.target.style.textDecoration = 'line-through'
    })
}
// Del X
for (let i = 0; i < del.length; i++) {
    del[i].addEventListener('click',function(e){
        e.target.parentNode.remove()
    })
    
}

forms.addEventListener('submit', function(e){
   e.preventDefault();
   if(form.data.value.trim() == ''){
            return
        }
    let li = document.createElement('li');
    li.innerText = form.data.value.trim();
        li.addEventListener('click',function(e){
            if(e.target.style.textDecoration == 'line-through'){
                e.target.style.textDecoration = 'none'
                return
            }
           e.target.style.textDecoration = 'line-through'
        })
        // create button
        let btn = document.createElement('button');
        btn.classList.add('del');
        btn.innerHTML = 'X';
        btn.addEventListener('click',function(e){
            e.target.parentNode.remove()
        })
        li.appendChild(btn)
    ul.appendChild(li)
    form.data.value = ''
}
)

async function fecthData() {
    // gọi đến backend >>> response
    let response = await fetch("https://news-ncov-api.herokuapp.com/news?_page=1")
    let data = await response.json();
    console.log(data);
    let html = '';
    data.forEach(function(e){
        html += `<li>${e.title}</li>`

    })
    console.log(html);
    ul.innerHTML = html;
}

fecthData()