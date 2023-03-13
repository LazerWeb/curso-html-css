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

function getRemainTime(deadline){
    let now = new Date(),
        remainTime = (new Date(deadline) - now + 1000) / 1000,
        remainSeconds = ('0' + Math.floor(remainTime % 60)).slice(-2),
        remainMinutes = ('0' + Math.floor(remainTime / 60 % 60)).slice(-2),
        remainHours = ('0' + Math.floor(remainTime / 3600 % 24)).slice(-2);
    
    return {
        remainTime,
        remainSeconds,
        remainMinutes, 
        remainHours,
    }
        
}

console.log(new Date().getTime());