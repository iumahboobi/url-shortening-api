function getInput() {
    return document.getElementById('input').value;
}
function shortLink() {
    // 1 get the input value
    var url = getInput();
    console.log(getInput())
    fetch(`https://api.shrtco.de/v2/shorten?url=${url}`)
        .then(res => res.json())
        .then(res => example(res.result.short_link))
        .catch(error => console.log(error))
}
function example(url) {

    /**<div class="flex-row copied-links">
     *    <p>Link to be copied</p>
          <p>Link copied</p>
            <div>
                 <button>Copy</button>
             </div>
     </div> 
     */
    var linkDiv, linkPar,linkPar2,btnDiv, copyBtn, container, middleSection, mainContainer, shortLinkContainer;
    mainContainer = document.querySelector('.main-container');
    middleSection = document.querySelector('.middle-section');
    shortLinkContainer = document.querySelector('.shorten-link-container');

    linkDiv = document.createElement('div');
    linkDiv.classList.add('flex-row', 'copied-links');
    linkPar = document.createElement('p');
    linkPar2 = document.createElement('p');
    linkPar.innerHTML = url;
    linkPar2.innerHTML = 'link Copied';
    linkDiv.append(linkPar);
    linkDiv.append(linkPar2);
    btnDiv = document.createElement('div');
    copyBtn = document.createElement('button');
    btnDiv.append(copyBtn);
    linkDiv.append(btnDiv);
    shortLinkContainer.append(linkDiv);


}
document.querySelector('.shorten-it').addEventListener('click', shortLink);
