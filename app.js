const accordionItemHeaders = document.querySelectorAll('.accordion-item-header');

accordionItemHeaders.forEach(accordionItemHeader => {
    accordionItemHeader.addEventListener('click', (e) => {
        accordionItemHeader.classList.toggle('active');
        const accordionItemBody = accordionItemHeader.nextElementSibling;
        if(accordionItemHeader.classList.contains('active')){
            accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + 'px';
        } else{
            accordionItemBody.style.maxHeight = 0;
        }
    })
})


/* const accordionText = document.querySelectorAll('.accordion-text');

accordionText.forEach((item) => {
    item.addEventListener('click', () => {
        onAccordionText(item);
    });
})

function onAccordionText(item){
    const accordionElement = item.parentElement;
    const accordionBody = item.nextElementSibling;
    const icon = item.lastElementChild;
    accordionElement.classList.toggle('active');
    accordionElement.classList.contains('active') ? icon.textContent = 'remove' : icon.textContent = 'add';

    if(item.classList.contains('active')){
        accordionBody.style.maxHeight = accordionBody.scrollHeight + 'px';
    } else{
        accordionBody.style.maxHeight = 0;
    }
} */

// Timer

const hoursText = document.querySelector('.hours strong');
const minutesText = document.querySelector('.minutes strong');
const secondsText = document.querySelector('.seconds strong');

setInterval(() => {
    const todayDate = new Date();
    let hours = 23 - todayDate.getHours();
    let minutes = 59 - todayDate.getMinutes();
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