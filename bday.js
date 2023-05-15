const popbtn = document.querySelector('.click');
const pop = document.querySelector('.pop');

popbtn.addEventListener('click' , () => {
    pop.classList.remove('hidden');
    pop.classList.add('pop-animation');
    popbtn.classList.add('hidden')
});
