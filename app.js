const accordionItemHeaders = document.querySelectorAll('.accordion-item-header');

accordionItemHeaders.forEach(accordionItemHeader => {
    accordionItemHeader.addEventListener('click', () => {

        const currentlyActiveAccordion = document.querySelector('.accordion-item-header.active');
        if(currentlyActiveAccordion && currentlyActiveAccordion !== accordionItemHeader ){
            currentlyActiveAccordion.classList.remove('active');
            currentlyActiveAccordion.nextElementSibling.style.maxHeight = 0;
        }

        accordionItemHeader.classList.toggle('active');

        const accordionItemBody = accordionItemHeader.nextElementSibling;
        if(accordionItemHeader.classList.contains('active')){         
            accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + 'px';
        } else{
            accordionItemBody.style.maxHeight = 0;
        }
    })
})

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


const footer = document.querySelector('footer');

document.addEventListener('DOMContentLoaded', createObserver);

function createObserver(){
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                accessBtn.style.display = 'none';
            } else{
                accessBtn.style.display = 'flex';
            }
        })
    })

    observer.observe(footer);
}