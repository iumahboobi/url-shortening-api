var field = document.getElementById('input');
function getInput() {
    return document.getElementById('input').value;
}
function shortLink() {
    // 1 get the input value
    var url;
    url = getInput();
    if (url === "") {
        field.classList.add("error");
        field.focus();

    }

    else {
        fetch(`https://api.shrtco.de/v2/shorten?url=${url}`)
            .then(res => res.json())
            .then(res => example(res.result.short_link))
            .catch(error => console.log(error))

    }

}
field.addEventListener('focusout', function () {
    field.classList.remove("error");

})
function example(url) {

    /**<div class="flex-row copied-links">
     *    <p>Link to be copied</p>
          <p>Link copied</p>
            <div>
                 <button>Copy</button>
             </div>
     </div> 
     */
    var linkDiv, linkPar, linkPar2, btnDiv, copyBtn, middleSection, mainContainer, shortLinkContainer;
    mainContainer = document.querySelector('.main-container');
    middleSection = document.querySelector('.middle-section');
    shortLinkContainer = document.querySelector('.shorten-link-container');

    linkDiv = document.createElement('div');
    linkDiv.classList.add('flex-row', 'copied-links');
    linkPar = document.createElement('input');
    linkPar.classList.add('remBorder');
    linkPar2 = document.createElement('p');
    linkPar.value = url;
    linkPar.setAttribute('readonly', true);

    linkDiv.append(linkPar);
    linkDiv.append(linkPar2);
    btnDiv = document.createElement('div');
    copyBtn = document.createElement('button');
    copyBtn.classList.add('shorten-it');
    copyBtn.addEventListener('click', function () {
        linkPar.select();
        linkPar.setSelectionRange(0, 999);
        document.execCommand('copy');
        copyBtn.innerHTML = 'Copied';
        linkPar2.innerHTML = 'Link Copied';
    })
    copyBtn.innerHTML = 'Copy'
    btnDiv.append(copyBtn);
    linkDiv.append(btnDiv);
    shortLinkContainer.append(linkDiv);

}

// Burger Menu button

const brgBtn = document.getElementById('burger');
const clsBtn = document.getElementById('closeBtn');
const mobNav = document.querySelector('.mobile-nav');
const body = document.getElementById('body');
function toggleMobNav () {
    if(!mobNav.style.display || mobNav.style.display === 'none' || body.style.overflow === 'none') {
        mobNav.style.display = 'flex';
        body.style.overflow = 'hidden';
         
    }
    else {
        mobNav.style.display = 'none';
        body.style.overflow = '';
    
    }
}

// Mobile version Navigation

const features = document.getElementById('m-features');
const pricing = document.getElementById('m-pricing');
const resources = document.getElementById('m-resources');

function hideMenu () {
    if(!mobNav.style.display || mobNav.style.display === 'flex') {
        mobNav.style.display = 'none';
        
    }
    else {
        mobNav.style.display = 'flex';
    }
}

// Click Handling
function handleClick(event) {
    event.preventDefault();
    // 1. Finding particular section you want to move.
    // 2. After finding section get the Y axis (position).
    // 3. Get window scrollY position.
    // 4  Add ScrollY position to section Y position.
    // 5. Use window.scroll to new Y position.
    const sectionRef = document.querySelector(this.getAttribute('href'))
    const secYaxis = sectionRef.getBoundingClientRect().y;
    const scrollY = window.scrollY + secYaxis;
    const finalPosition = scrollY - 350;
    window.scroll(0, finalPosition);

}

// step 1: take the reference of navigation bar and store in a variable.
// step 2: add eventListener onscroll and add scrollDown function.
// step 3: if window.scrollY > 100 then add sticky add class to navigation bar

var navBar = document.querySelector(".upper-section");

window.addEventListener('scroll', scrollDown);

function scrollDown() {
    if (window.scrollY >= 10) {
        navBar.classList.add("sticky")

    }
    else {
        navBar.classList.remove("sticky");
    }
}
document.querySelector('.shorten-it').addEventListener('click', shortLink);
document.querySelectorAll('.nav-btn a').forEach((element) => {
    element.addEventListener('click', handleClick);
})

brgBtn.addEventListener('click',toggleMobNav);
clsBtn.addEventListener('click',toggleMobNav);
features.addEventListener('click',hideMenu);
pricing.addEventListener('click',hideMenu);
resources.addEventListener('click',hideMenu);