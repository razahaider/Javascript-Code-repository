const bodySelector = document.querySelector('body')
const mainContainer = document.querySelector('.main-container')
const modalWindow = document.querySelector('.modal-window')
const closeBtn = document.querySelector('.close-btn')
const showModalBtn = document.querySelectorAll('button')

modalWindow.style.display = 'none'
closeBtn.addEventListener('click', (e) => {

    modalWindow.style.display = 'none'
    mainContainer.style.filter = '';

})
document.addEventListener('keydown',(e)=>{
    if(e.key==='Escape'){
        
    modalWindow.style.display = 'none'
    mainContainer.style.filter = '';
    }
})
showModalBtn.forEach((btn) => btn.addEventListener('click', (e) => {
    mainContainer.style.filter = 'blur(10px)';
    modalWindow.style.display = 'flex';
}))