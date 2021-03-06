AOS.init();

//#region Nav Bar Handlers
var navBar = document.getElementById('navBar');
var menuIcon = document.getElementById('menuIcon');
var nav = document.getElementById('nav');
var navLink = document.getElementsByClassName('navLink');

navBar.addEventListener('click', function () {
    menuIcon.classList.toggle('is-clicked');
    navBar.classList.toggle('menu-is-open');
    nav.classList.toggle('is-visible');
});


for (let i = 0; i < navLink.length; i++) {
    navLink[i].addEventListener('click', function () {
        menuIcon.classList.toggle('is-clicked');
        navBar.classList.toggle('menu-is-open');
        nav.classList.toggle('is-visible');
    });
}
//#endregion
//#region Photo Gallery
var photoGallery = document.getElementById('photoGallery');
var photoFragment = document.createDocumentFragment();

images.forEach(element => {
    console.log(element);
    var galleryItem = document.createElement('div');
    galleryItem.classList.add('column');
    galleryItem.classList.add('is-one-third');
    var galleryLink = document.createElement('a');
    galleryLink.classList.add('bpImage');
    galleryLink.href = element.Location;
    galleryLink.title = element.Title;

    galleryItem.appendChild(galleryLink);

    var galContent = document.createElement('div');
    galContent.className = 'gal-content';

    var galImage = document.createElement('img');
    galImage.className = 'gallery-image';
    galImage.src = element.Location;
    galContent.appendChild(galImage);


    if (element.Title != "") {
        var galOverlay = document.createElement('div');
        galOverlay.className = 'content-overlay';

        var galDetails = document.createElement('div');
        galDetails.className = 'content-details';

        var galTitle = document.createElement('h3');
        galTitle.className = 'content-title';
        galTitle.innerText = element.Title;

        galDetails.appendChild(galTitle);

        galContent.appendChild(galOverlay);
        galContent.appendChild(galDetails);
    }

    galleryLink.appendChild(galContent);

    photoFragment.appendChild(galleryItem);
});

photoGallery.appendChild(photoFragment);
//#endregion
//#region Blue Imp Gallery
blueimp.Gallery.prototype.options.toggleControlsOnReturn = false;
blueimp.Gallery.prototype.options.toggleControlsOnSlideClick = false;

// Initialize the Gallery as video carousel:
blueimp.Gallery( performances, {
    container: '#blueimp-video-carousel',
    carousel: true,
    continuous: true,
    startSlideshow: false,
    youTubeClickToPlay: false
});






document.getElementById('photoGallery').onclick = function (event) {
    event = event || window.event;
    var parent = getClosest(event.target, '.bpImage');
    var target = event.target || event.srcElement,
        link = target.src ? parent : parent,
        options = {
            index: link,
            event: event
        },
        links = this.getElementsByTagName('a');
    console.log(parent);
    blueimp.Gallery(links, options);
};

var getClosest = function (elem, selector) {

    // Element.matches() polyfill
    if (!Element.prototype.matches) {
        Element.prototype.matches =
            Element.prototype.matchesSelector ||
            Element.prototype.mozMatchesSelector ||
            Element.prototype.msMatchesSelector ||
            Element.prototype.oMatchesSelector ||
            Element.prototype.webkitMatchesSelector ||
            function (s) {
                var matches = (this.document || this.ownerDocument).querySelectorAll(s),
                    i = matches.length;
                while (--i >= 0 && matches.item(i) !== this) {}
                return i > -1;
            };
    }

    // Get the closest matching element
    for (; elem && elem !== document; elem = elem.parentNode) {
        if (elem.matches(selector)) return elem;
    }
    return null;

};
//#endregion




//#region Albums
var AlbumImageOne = document.getElementById('AlbumImageOne');
var AlbumPlayerOne = document.getElementById('AlbumPlayerOne');
AlbumImageOne.addEventListener('click', function () {
    AlbumImageOne.style.display = 'none';
    AlbumPlayerOne.style.display = 'block';
});
var AlbumImageTwo = document.getElementById('AlbumImageTwo');
var AlbumPlayerTwo = document.getElementById('AlbumPlayerTwo');
AlbumImageTwo.addEventListener('click', function () {
    AlbumImageTwo.style.display = 'none';
    AlbumPlayerTwo.style.display = 'block';
});
//#endregion

//#region Upcoming Performance Cards

var fragment = document.createDocumentFragment();
var columnElement;
var x = 0;
shows.forEach(element => {
    x = x + 5;
    columnElement = document.createElement('div');
    columnElement.classList.add('column');
    columnElement.classList.add('is-one-third');


    var cardElement = document.createElement('div');
    cardElement.classList.add('card');
    cardElement.classList.add('performance-card');
    cardElement.setAttribute('data-aos', 'slide-left');
    cardElement.setAttribute('data-aos-delay', 35 + x);


    var cardBody = document.createElement('div');
    cardElement.classList.add('card-content');


    var eventWho = document.createElement('p');
    eventWho.classList.add('title');
    eventWho.classList.add('has-text-white');
    eventWho.innerText = element.Who;
    cardBody.appendChild(eventWho);


    var eventDate = document.createElement('p');
    eventDate.classList.add('title');
    eventDate.classList.add('has-text-white');
    eventDate.classList.add('has-padding-50');
    eventDate.innerHTML = element.Date + '<br>' + element.Time;
    cardBody.appendChild(eventDate);

    var eventWhere = document.createElement('p');
    eventWhere.classList.add('title');
    eventWhere.classList.add('has-text-white');
    eventWhere.innerText = element.Venue;
    cardBody.appendChild(eventWhere);

    cardElement.appendChild(cardBody);
    columnElement.appendChild(cardElement);
    fragment.appendChild(columnElement);

});

var eventList = document.getElementById('Performances-Grid');
eventList.appendChild(fragment);
//#endregion