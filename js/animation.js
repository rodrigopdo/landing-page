
//==NAVBAR===========================    
window.onscroll = function scrollFunction() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        document.getElementById("header").style.background = "#145536"; 
    } else {
        document.getElementById("header").style.background = "transparent";
        document.getElementsByClassName("menu")[0].style.fontSize = "xx-large"; 
    }
}

//==TYPEWRITER========================
function typeWriter(element) {
    const textArray = element.innerHTML.split('');
    element.innerHTML = '';
    textArray.forEach((letter, i) => {
        setTimeout(() => element.innerHTML += letter, 50 * i)
    });
}

const titulo = document.getElementById('typewriter')
typeWriter(titulo);


//==CARDS PRODUCTS SECTION=============
window.addEventListener('scroll', () => {
    let content = document.querySelector('.grid-cards');
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 0.7;
    if(contentPosition < screenPosition) {
        content.classList.add('active-cards');
    }else {
        content.classList.remove('active-cards')
    }
});

//==ABOUT SECTION=================
window.addEventListener('scroll', () => {
    let content1 = document.querySelector('.anima-1');
    let contentPosition1 = content1.getBoundingClientRect().top;
    let screenPosition1 = window.innerHeight;
    if(contentPosition1 < screenPosition1) {
        content1.classList.add('active-about');
    }else {
        content1.classList.remove('active-about');
    }
});

window.addEventListener('scroll', () => {
    let content2 = document.querySelector('.anima-2');
    let contentPosition2 = content2.getBoundingClientRect().top;
    let screenPosition2 = window.innerHeight;
    if(contentPosition2 < screenPosition2) {
        content2.classList.add('active-about');
    }else {
        content2.classList.remove('active-about');
    }
});

window.addEventListener('scroll', () => {
    let content3 = document.querySelector('.anima-3');
    let contentPosition3 = content3.getBoundingClientRect().top;
    let screenPosition3 = window.innerHeight;
    if(contentPosition3 < screenPosition3) {
        content3.classList.add('active-about');
    }else {
        content3.classList.remove('active-about');
    }
});


