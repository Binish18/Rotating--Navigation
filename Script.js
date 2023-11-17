const open = document.getElementById('open') // id ko lia 
const close = document.getElementById('close') 
const container = document.querySelector('.container')

open.addEventListener('click', () => container.classList.add('show-nav')) // bas class add ki 

close.addEventListener('click', () => container.classList.remove('show-nav')) // yahan remove ki 