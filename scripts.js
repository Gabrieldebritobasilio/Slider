let btnNext = document.querySelector('.next')
let btnBack = document.querySelector('.back')

let container = document.querySelector('.container')
let list = document.querySelector('.container .list')
let thumb = document.querySelector('.container .thumb')

btnNext.onclick = () => moveItemsOnclick('next')
btnBack.onclick = () => moveItemsOnclick('back')

function moveItemsOnclick(type) {

    let listitems = document.querySelectorAll('.list .list-item')
    let thumbitems = document.querySelectorAll('.thumb .thumb-item') 

    console.log(listitems)
    console.log(thumbitems)

    if (type === 'next') {
        list.appendChild(listitems[0])
        thumb.appendChild(thumbitems[0])
        container.classList.add('next')

    } else {
       
        list.prepend(listitems[listitems.length - 1])
        thumb.prepend(thumbitems[thumbitems.length - 1])
        container.classList.add('back')
    }

   
    setTimeout(() => {
        container.classList.remove('next')
        container.classList.remove('back')
    }, 3000); 
}
