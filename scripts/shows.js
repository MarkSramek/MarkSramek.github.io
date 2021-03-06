//TEMPLATE
// {
//     Date: "Month and date ex: June 15th",
//     Time: "Time ex: 8:00 pm",
//     Who: "Who is playing ex: Mark Sramek",
//     Venue: "Where ex: Columbia College Chicago",
// },

var shows = [

    {
        Date: "Sun August 25th",
        Time: "10:00-12:00 AM",
        Who: "Mark with 'Roger & Friends'",
        Venue: "Glen Ellyn Festival of the Arts",
    },
    {
        Date: "3rd Friday EVERY MONTH",
        Time: "8:00-11:00",
        Who:  "Salties Host Open Mic",
        Venue: "Joe's Saloon, 9220 47th St, Brookfield",
    },
    {
        Date: "Sat. Aug. 10th",
        Time: "5-9:00 p.m.",
        Who:  "Mark, Ken & Jim Acoustic",
        Venue: "The Wild Child's Tavern and Grill, Twin Lakes, Wisconsin",
    },
    {   
        Date: "Sat. Sept. 14th",
        Time: "8:00-11:00 p.m.",
        Who:  "Crawdads Reunion Show",
        Venue: "Brixie's - 9526 Ogden, Brookfield",
    },
    {
        Date: "Sat. Nov. 23rd",
        Time: "9-1",
        Who:  "The Salties",
        Venue: "Cuzin's in Tinley Park",
    },
    {
        Date: "Sat. Feb. 23rd",
        Time: "9-12",
        Who:  "The Salties",
        Venue: "Brixie's in Brookfield",
    },
    {
        Date: "Fri. March 20th",
        Time: "8:00 p.m.",
        Who: "The Salties AND The Bank Notes",
        Venue: "The Uptown in Westmont",
    },
    {
        Date: "Sat. May 23rd",
        Time: "4:00",
        Who: "The Salties",
        Venue: "Westmont Lions Club Red White and Blue BBQ",
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
