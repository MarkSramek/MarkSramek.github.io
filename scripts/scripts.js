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

//#region Blue Imp Gallery
blueimp.Gallery.prototype.options.toggleControlsOnReturn = false;
blueimp.Gallery.prototype.options.toggleControlsOnSlideClick = false;

// Initialize the Gallery as video carousel:
blueimp.Gallery([{
    title: 'Meet The Salties',
    href: 'https://www.youtube.com/watch?v=aVwRZuToM-U',
    type: 'text/html',
    youtube: 'aVwRZuToM-U',
    poster: '../images/photos/salties.jpg',

    },
    {
        title: 'Mark and Brian Jam Out',
        href: '../images/video/MarkandBrian.mp4',
        type: 'video/mp4',
        poster: '../images/photos/markandbrian.png'
    },
    {
        title: 'Meet The Salties',
        href: 'https://www.youtube.com/watch?v=aVwRZuToM-U',
        type: 'text/html',
        youtube: 'aVwRZuToM-U',
        poster: '../images/photos/salties.jpg',
    },
    {
        title: 'Mark and Brian Jam Out',
        href: '../images/video/MarkandBrian.mp4',
        type: 'video/mp4',
        poster: '../images/photos/markandbrian.png'
    },
], {
    container: '#blueimp-video-carousel',
    carousel: true,
    continuous: true,
    startSlideshow: false,
    youTubeClickToPlay: false
});






document.getElementById('photoGallery').onclick = function (event) {
    event = event || window.event;
    var target = event.target || event.srcElement,
        link = target.src ? target.parentNode.parentNode : target.parentNode.parentNode,
        options = {
            index: link,
            event: event
        },
        links = this.getElementsByTagName('a');
 
    blueimp.Gallery(links, options);
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