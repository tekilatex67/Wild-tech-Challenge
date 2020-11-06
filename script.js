let family = document.querySelector('.family');

// MENU NAV RESPONSIVE
let menu = document.querySelector('header nav');
let menutext = document.querySelector('header nav .menuNav');

function responsiveMenu() {    
        menu.addEventListener('click', () => {
                menu.classList.toggle('open');

            if (menu.classList.contains('open')) {
                menutext.innerHTML = 'Retour';
            } else {
                menutext.innerHTML = "Menu";
            }
        })   
}

responsiveMenu();
    

// BLOCK PERSONNAGE (page family)
let persosName = document.querySelectorAll('.family .container h2');
let btnReturn = document.querySelectorAll('.returnBtn');

persosName.forEach(name => {
    name.addEventListener('click', () => {
        name.parentNode.querySelector('article').classList.add('open');
    })

});

btnReturn.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.parentNode.classList.remove('open');
    })
});



// TABLEAU (page Assets)

let btnMore = document.querySelector('.btnMore');
let table = document.querySelector('div.table');

if (btnMore) {
    btnMore.addEventListener('click', () => {
        table.classList.toggle('open');
        if (table.classList.contains('open')) {
            btnMore.innerHTML = "See Less";
            btnMore.style.color = "#fff";
        } else {
            btnMore.innerHTML = "See More";
            btnMore.style.color = "#444";
        }
    })
}

//SUBMIT (page Contact) 
let btnSubmit = document.querySelector('[type=submit]');

function onSubmit() {

    if (!btnSubmit) return;
    btnSubmit.addEventListener('click', (e) => {
        /*e.preventDefault();*/
        alert('Voulez-vous vraiment envoyer ce message au Royaume ?')
    })
}

onSubmit();



//---------------- SECRET CLICK ------------------

//LOCAL STORAGE

let foundsClick = localStorage.getItem('clicks') || [];
let secretClicks = document.querySelectorAll(".secretClick");
let cptClick = document.querySelector('.cptClick span');


if (typeof(foundsClick) === "string") {
    foundsClick = foundsClick.split(',');
    cptClick.innerHTML = `${foundsClick.length} /7`
}

secretClicks.forEach(click => {

    click.addEventListener('click', () => {

        if (!click.classList.contains('found')) {
            alert('bravo vous avez trouver un secret')
            click.classList.add('found');
            foundsClick.push(click.id);
            cptClick.innerHTML = `${foundsClick.length} /7`
        }
        localStorage.setItem('clicks', foundsClick);

    })
})


if (foundsClick.length >= 1) {
    foundsClick.forEach(secret => {
        let click = document.querySelector(`#${secret}`);
        if (!click) return;
        if (!click.classList.contains('found')) {
            click.classList.add('found');

        }

    });
}

//CLICKS

//LOGO (page home)
let logo = document.querySelector('.home .logo');
let f = document.querySelector('.lower');

if (logo) {
    logo.addEventListener('click', () => {
        f.innerHTML = "F"
    })

    if (logo.classList.contains('found')) {
        f.innerHTML = "F"
    }
}

//Wild code (pageHome)

let k = document.querySelector('#k');
let secretDiv = document.querySelector('.secretDiv');

if(k){
    k.addEventListener('click', ()=>{
        secretDiv.classList.add('found');
    })
    if(k.classList.contains('found') && !secretDiv.classList.contains('found')){
        secretDiv.classList.add('found');
    }
}

//HELMET (page Asset)
let imgHelmet = document.querySelector('#helmet');

if (imgHelmet) {
    imgHelmet.addEventListener('click', () => {
        imgHelmet.src = "./img/helmet2.png";
    })

    if (imgHelmet.classList.contains('found')) {
        imgHelmet.src = "./img/helmet2.png";
    }
}

//SLAVE (page Asset)
let slave = document.querySelector('#slave');

if (slave) {
    slave.addEventListener('click', () => {
        slave.innerHTML = "0"
    })

    if (slave.classList.contains('found')) {
        slave.innerHTML = "0"
    }

}


// POP UP SECRET QUEST

let quest = document.querySelector('.secretQuest');
let btnOk = document.querySelector('.btnOk');
let opened = localStorage.getItem('open');

if (quest) {
    quest.classList.add(`${opened}`);

    setTimeout(function() {
        if (!quest.classList.contains('opened')) {
            quest.classList.add('open');
        }
    }, 1000);

    btnOk.addEventListener('click', () => {
        quest.classList.remove('open');
        quest.classList.add('opened');

        localStorage.setItem('open', 'opened');
    })
}

//clear Local storage

const clearClick = document.querySelector('.cptClick');

clearClick.addEventListener('click', () => {
    localStorage.clear();
    window.location.reload(true);
})

//------------------------------ Anime Design

// Class Anime SECTION
let section = document.querySelector('body>section');

setTimeout(function(){
    section.classList.add('anime')
},200)

//ASSETS
//cercle Assets
const cercles = document.querySelectorAll('.assets .itemCard .cercle');
const cards = cercles.parentNode;

function handleHeight(items){
items.forEach(item => {
    item.style.height = `${item.clientWidth}px`;
    item.style.top = `${(item.parentNode.clientHeight - item.clientHeight)/1.8}px`
    
});
}

handleHeight(cercles);
window.addEventListener('resize',()=>{
    handleHeight(cercles);
} )

//Button img anime

const imagesBtn = document.querySelectorAll('.assets .itemCard img');
let currentVisible = document.querySelector('.assets .itemCard.visible');


imagesBtn.forEach(img => {     
    
    img.addEventListener('click', (e)=>{
        if(e.target.parentNode === currentVisible)return;
        
        currentVisible.classList.remove('visible');
        img.parentNode.classList.add('visible');
        currentVisible = document.querySelector('.assets .itemCard.visible');
        datasNum = currentVisible.querySelectorAll('.itemCard.visible [data-to]');
        trigerNum(datasNum);
    })
});

//num Assets
//NOMBRES (page Assets)
if(document.querySelector('.assets')){
let datasNum = currentVisible.querySelectorAll('.itemCard.visible [data-to]');

function trigerNum(elements){
   
    elements.forEach(element => {
    let cpt = 0;
    let timer = 1;
    let n = element.dataset.to;
    let delta = Math.ceil(((timer * 1000) / n));

    function count() {
        element.innerHTML = cpt++;
        if (cpt <= n) {
            setTimeout(count, delta);
        }
    }
    setTimeout(count, delta);
});
}

trigerNum(datasNum);
}

