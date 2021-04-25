//TEMPLATE
// {
//     Date: "Month and date ex: June 15th",
//     Time: "Time ex: 8:00 pm",
//     Who: "Who is playing ex: Mark Sramek",
//     Venue: "Where ex: Columbia College Chicago",
// },
var shows = [
    
    {
        Date: "May 29, 30 & June 5, 6",
        Time: "11am-2pm",
        Who:  "Salt Creek Boys",
        Venue: "Mary's Morning Mixup, 9110 Broadway, Brookfield, IL",
    },
    {
        Date: "3rd Friday of every month starting June 18th",
        Time: "8:00pm-11:00pm",
        Who:  "Salties Host Open Mic",
        Venue: "Joe's Saloon, 9220 47th St, Brookfield",
    },
    {
        Date: "July 24",
        Time: "7pm-10pm",
        Who:  "Mark Sramek with Mardi & Arthur",
        Venue: "Bad Dad Brewing Co, 407 W. Washington St., Fairmont, Indiana",
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
        Location: "../images/photos/Train.jpg",
        Title: "",
    },
    {
        Location: "../images/photos/Mark.jpg",
        Title: "",
    },
    {
        Location: "../images/photos/HillbillyScbers.jpg",
        Title: "Salt Creek Boys",
    },
    {
        Location: "../images/photos/SaltCreek.jpg",
        Title: "Salt Creek Boys at Rails & Ales Stage, Colorado",
    },
    {
        Location: "../images/photos/Band3.png",
        Title: "Salties at Westmont BBQ Fest",
    },
    {
        Location: "../images/photos/Band2.JPG",
        Title: "The Salties",
    },

];

//TEMPLATE
//This need at the very minimium 3 videos to cycle correctly,
//since we only have 2 videos I am doubling it up for now 1,2,1,2
//if you replace a video you need to replace it in both instances
//if you are adding a video you can remove the duplicates
// {
//   title: 'Name of Video here',
//   type: 'text/html',
//   youtube: 'the id of the video after the = in the video link ex: aVwRZuToM-U',
//   poster: 'location to the photo put it in images/photo folder and same rules apply as the photo gallery../images/photos/salties.jpg',
// },
var performances = [

    {
        title: 'Marks\'s Collection of Shows',
        type: 'text/html',
        youtube: 'LRTJTLajxkI',
        poster: '../images/photos/markherecomesthesun.png'

    },
    {
        title: 'Meet The Salties',
        type: 'text/html',
        youtube: 'aVwRZuToM-U',
        poster: '../images/photos/salties.jpg',
    },
    {
        title: 'Marks\'s Collection of Shows',
        type: 'text/html',
        youtube: 'LRTJTLajxkI',
        poster: '../images/photos/markherecomesthesun.png'

    },
    {
        title: 'Meet The Salties',
        type: 'text/html',
        youtube: 'aVwRZuToM-U',
        poster: '../images/photos/salties.jpg',
    },

];
