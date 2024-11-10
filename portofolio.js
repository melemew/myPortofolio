// clear form before unload
window.onbeforeunload = () => {
    for (const form of document.getElementsByTagName("form")) {
        form.reset();
    }
}
    
    window.addEventListener('scroll', reveal);
    
    function reveal(){  
        var reveals = document.querySelectorAll('.reveal');
    
        for(var i = 0; i < reveals.length; i++){
    
            var windowheight = window.innerHeight;
            var revealtop = reveals[i].getBoundingClientRect().top;
            var revealpoint = 150;
    
            if(revealtop < windowheight - revealpoint){
                reveals[i].classList.add('active');
            }
            else{
                reveals[i].classList.remove('active');
            }
        }
    }




    
// interaksi cards :
// data IMG :
const databaseImg = [
{
    url: 'img/kalkulator.png',
    judul: 'kalkulator'
},
{
    url: 'img/lightbox.png',
    judul: 'Galeri Lightbox'
},
{
    url: 'img/mediumwebsite.png',
    judul: 'Tokisaki Kurumi'
},
{
    url: 'img/signin-out.png',
    judul: 'Sign in | up'
}, 
{
    url: 'img/simplfywebsite.png',
    judul: 'Website Sederhana'
},
{
    url: 'img/todoapp.png',
    judul: 'Todo App'
},'img/browser.svg','img/framework.svg'];


// interaksi :
const container = document.querySelector('div.container-project');
const next = document.querySelector('div.next');
const previous = document.querySelector('div.previous');


// aplication :
let indexX = 3;
let indexY = 0;

next.addEventListener('click', after);
previous.addEventListener('click', before);

function gabut(animasi) {
    const img = [];
    for (let i = 0; i < databaseImg.length; i++) {
        if (i >= indexY && i < indexX) {
            img.push(databaseImg[i]);
        } else if ( i > indexX) {
            return createUI(img, animasi);
        }
    }
}
gabut()

function after() {
    if (indexX === databaseImg.length - 2) {
        indexX = 3
        indexY = 0

        console.log(indexX);
        console.log(indexY);

        return gabut('next-animasi');
    }

    indexX += 3;
    indexY += 3;

    console.log(indexX);
    console.log(indexY);
    
    return gabut('next-animasi');
}

function before()  {
    if (indexY === databaseImg.length - 8) {
        indexX = 6
        indexY = 3

        console.log(indexX);
        console.log(indexY);

        return gabut('previous-animasi');
    }

    indexX -= 3;
    indexY -= 3;

    return gabut('previous-animasi');
}


function createUI(img, animasi) {
    let ui = '';
    img.forEach(img => {
        ui += `<div class="card ${animasi}">
                        <img src="${img.url}" class="header"></img>
                        <div class="content">
                            <h2>${img.judul}</h2>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod nesciunt nihil cupiditate aliquid accusantium. Inventore!</p>
                            <a href="portofolio-latihan.html"><button>kunjungi</button></a>
                        </div>
                    </div>`;
    });

    return container.innerHTML = ui;
}