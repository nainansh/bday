const popbtn = document.querySelector('.click');
const pop = document.querySelector('.pop');
const emj = document.querySelector('.emoji-container');
const nxt = document.querySelector('.special');
const lst = document.querySelector('.nxt')

popbtn.addEventListener('click' , () => {
    pop.classList.toggle('hidden');
    pop.classList.toggle('pop-animation');
    popbtn.classList.toggle('hidden');
    emj.classList.toggle('hidden');
});

nxt.addEventListener('click' , () => {
    pop.classList.toggle('hidden');
    // popbtn.classList.toggle('hidden');
    lst.classList.remove('hidden');
    nxt.classList.toggle('hidden');
});



