//TEMPLATE
// {
//     Date: "Month and date ex: June 15th",
//     Time: "Time ex: 8:00 pm",
//     Who: "Who is playing ex: Mark Sramek",
//     Venue: "Where ex: Columbia College Chicago",
// },

var shows = [

    {
        Date: "June 15th",
        Time: "8:00 pm",
        Who: "Mark Sramek",
        Venue: "Venue",
    },
    {
        Date: "June 16th",
        Time: "7:00 pm",
        Who: "The Salties",
        Venue: "Venue",
    },
    {
        Date: "June 17th",
        Time: "5:00 pm",
        Who: "The Salties",
        Venue: "Venue",
    },


];


//TEMPLATE
// Image needs to be placed in images/photos folder

// {
//     Location:"../images/photos/(EXACT NAME OF PHOTO AND EXTENTION)" ex: ../images/photos/Mark.JPG",
//     Title: "Title you want to show up under the photo ex: The Salties",
// },

var images = [

    {
        Location: "../images/photos/Band3.png",
        Title: "Salties at Westmont BBQ Fest",
    },
    {
        Location: "../images/photos/Band2.JPG",
        Title: "The Salties",
    },
    {
        Location: "../images/photos/Train.jpg",
        Title: "",
    },
    {
        Location: "../images/photos/Mark.jpg",
        Title: "",
    },
    {
        Location: "../images/photos/Guitars.jpg",
        Title: "",
    },
    {
        Location: "../images/photos/SaltCreek.jpg",
        Title: "Salt Creek Boys at Rails & Ales Stage, Colorado",
    },
    {
        Location: "../images/photos/HillbillyScbers.jpg",
        Title: "Salt Creek Boys",
    },

];

//TEMPLATE
//This need at the very minimium 3 videos to cycle correctly,
//since we only have 2 videos I am doubling it up for now 1,2,1,2
//if you replace a video you need to replace it in both instances
//if you are adding a video you can remove the duplicates
// {
//   title: 'Name of Video here',
//   href: 'You Tube Link ex: https://www.youtube.com/watch?v=aVwRZuToM-U',
//   type: 'text/html',
//   youtube: 'the id of the video after the = in the video link ex: aVwRZuToM-U',
//   poster: 'location to the photo put it in images/photo folder and same rules apply as the photo gallery../images/photos/salties.jpg',
// },
var performances = [

    {
        title: 'Meet The Salties',
        href: 'https://www.youtube.com/embed/aVwRZuToM-U',
        type: 'text/html',
        youtube: 'aVwRZuToM-U',
        poster: '../images/photos/salties.jpg',

    },
    {
        title: 'Mark and Brian Jam Out',
        href: 'https://www.youtube.com/watch?v=kVB9pPyOOhA',
        type: 'text/html',
        youtube: 'kVB9pPyOOhA',
        poster: '../images/photos/markandbrian.png'
    },
    {
        title: 'Meet The Salties',
        href: 'https://www.youtube.com/embed/aVwRZuToM-U',
        type: 'text/html',
        youtube: 'aVwRZuToM-U',
        poster: '../images/photos/salties.jpg',
    },
    {
        title: 'Mark and Brian Jam Out',
        href: 'https://www.youtube.com/watch?v=kVB9pPyOOhA',
        type: 'text/html',
        youtube: 'kVB9pPyOOhA',
        poster: '../images/photos/markandbrian.png'
    },

];