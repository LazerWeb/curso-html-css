const modulesText = document.querySelectorAll('.module-text');
const showRemoveBtn = document.querySelector('.show-remove');

modulesText.forEach((item) => {
    item.addEventListener('click', () => {
        onModuleText(item);
    });
})

function onModuleText(item){
    const module = item.parentElement;
    const icon = item.lastElementChild;
    module.classList.toggle('active');
    module.classList.contains('active') ? icon.textContent = 'remove' : icon.textContent = 'add';
}