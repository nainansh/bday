const popbtn = document.querySelector('.click');
const pop = document.querySelector('.pop');
const emj = document.querySelector('.emoji-container');

popbtn.addEventListener('click' , () => {
    pop.classList.remove('hidden');
    pop.classList.add('pop-animation');
    popbtn.classList.add('hidden')
    emj.classList.remove('hidden')
});
