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

// Timer

const hoursText = document.querySelector('.hours strong');
const minutesText = document.querySelector('.minutes strong');
const secondsText = document.querySelector('.seconds strong');

setInterval(() => {
    const todayDate = new Date();
    let hours = 23 - todayDate.getHours();
    let minutes = 60 - todayDate.getMinutes();
    let seconds = 60 - todayDate.getSeconds();

    if(hours < 10){
        hours = '0' + hours;
    }

    if(minutes < 10){
        minutes = '0' + minutes;
    }

    if(seconds < 10){
        seconds = '0' + seconds;
    }

    hoursText.textContent = hours;
    minutesText.textContent = minutes;
    secondsText.textContent = seconds;
}, 1000)