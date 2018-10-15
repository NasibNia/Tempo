'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Venues', [{
      "name": "rickshaw stop",
      "address": "155 fell st, san francisco, ca 94102",
      "website": "https://www.rickshawstop.com/",
      "email": "info@rickshawstop.com",
      "phone_number": "",
      "capacity": 400,
      "average_ticket_price": 49,
      "venue_picture_url": "http://3.bp.blogspot.com/-zfNYPUZqDWk/VUal1gFWkQI/AAAAAAAAFAM/10UHsMC7sbw/s1600/Rickshaw%2BStop.JPG",
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      "name": "slim's",
      "address": "333 11th st, san francisco, ca 94103",
      "website": "http://www.slimspresents.com/",
      "email": "jasons@goldenvoice.com",
      "phone_number": "",
      "capacity": 500,
      "average_ticket_price": 62,
      "venue_picture_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPUqjaWbzR027x5f_PdPKTFAqgHoxGpm--Zsi836JiFPU_Mrg4Cg",
      createdAt : new Date(),
      updatedAt : new Date()
    },
     {
      "name": "sfjazz center",
      "address": "201 franklin st, san francisco, ca 94102",
      "website": "https://www.sfjazz.org",
      "email": "info@sfjazz.org",
      "phone_number": "",
      "capacity": 700,
      "average_ticket_price": 64,
      "venue_picture_url": "https://www.sftravel.com/sites/sftraveldev.prod.acquia-sites.com/files/styles/sft_550x300/public/parters/images/P0001446_1_20140711130243_14.JPG?itok=Hb-4g0ZJ&timestamp=1536807428",
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      "name": "the fillmore",
      "address": "1805 geary blvd,san francisco, ca 94115",
      "website": "http://thefillmore.com",
      "email": "thefillmore@livenation.com",
      "phone_number": "",
      "capacity": 1315,
      "average_ticket_price": 32,
      "venue_picture_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQaRSDIMqcTRRMSbK_D3esl6yL55R6nLoORKdiohSTzThQK1XPeA",
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      "name": "the chapel",
      "address": "777 valencia st, san francisco, ca 94110",
      "website": "https://www.thechapelsf.com/",
      "email": "info@thechapelsf.com",
      "phone_number": "",
      "capacity": 200,
      "average_ticket_price": 22,
      "venue_picture_url": "https://picture.liquidspace.com/Index/6ff1a226-262c-4b1a-a6d0-937bf86fc28c?emptyImageUrl=https:%2F%2Fliquidspace.com%2FContent%2FImages%2Fliquid-holder.jpg&etag=+VkOdxpOF3+h9nOqOl3tBA==&maxWidth=1100&maxHeight=820",
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      "name": "great american music hall",
      "address": "859 o'farrell st,san francisco, ca 94109",
      "website": "http://www.slimspresents.com/",
      "email": "info@gamh.com",
      "phone_number": "",
      "capacity": 470,
      "average_ticket_price": 25,
      "venue_picture_url": "https://upload.wikimedia.org/wikipedia/commons/6/6a/Great_American_Music_Hall_%28April_1976%29.jpg",
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      "name": "the laundry",
      "address": "3359 26th st,san francisco, ca 94110",
      "website": "http://thelaundrysf.com",
      "email": "info@thelaundrysf.com",
      "phone_number": "",
      "capacity": 210,
      "average_ticket_price": 62,
      "venue_picture_url": "https://picture.liquidspace.com/Index/9304975a-8757-4c2a-accf-32a58100d251?emptyImageUrl=https:%2F%2Fcontent.liquidspace.com%2FImages%2Fliquid-holder.jpg%3Fv%3D-73115844&etag=ki0J8DxHxGZWM6UNOfl8Dw==&maxWidth=1100&maxHeight=820&crop=true",
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      "name": "the warfield",
      "address": "982 market st,san francisco, ca 94102",
      "website": "http://www.thewarfieldtheatre.com",
      "email": "info@thewarfieldtheatre.com",
      "phone_number": "415) 345-0900",
      "capacity": 2300,
      "average_ticket_price": 45,
      "venue_picture_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScA2OT_DMWKyjQbeWwL6p3s2JmXERKRE5gsfxdLe0hZSJBmLY7xw",
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      "name": "hemlock tavern",
      "address": "1131 polk st,san francisco, ca 94109",
      "website": "http://www.hemlocktavern.com",
      "email": "hemlocktavern@gmail.com",
      "phone_number": "",
      "capacity": 37,
      "average_ticket_price": 15,
      "venue_picture_url": "https://images.complex.com/complex/image/upload/c_limit,w_680/fl_lossy,pg_1,q_auto/olmzo0tiz4fxnzikx6wa.jpg",
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      "name": "the riptide",
      "address": "3639 taraval st,san francisco, ca 94116",
      "website": "http://www.riptidesf.com",
      "email": "riptidesf@gmail.com",
      "phone_number": "",
      "capacity": 500,
      "average_ticket_price": "N/A",
      "venue_picture_url": "https://c1.staticflickr.com/7/6004/5886394540_971eca7219_b.jpg",
      createdAt : new Date(),
      updatedAt : new Date()
    },{
      "name": "brick & mortar music hall",
      "address": "1710 mission st,san francisco, ca 94103",
      "website": "https://brickandmortarmusic.com",
      "email": "info@pegcollective.org}",
      "phone_number": "",
      "capacity": 250,
      "average_ticket_price": 21,
      "venue_picture_url": "https://media2.fdncms.com/sfexaminer/imager/the-city-is-rolling-back-restrictions-on-brick-and-mortar-music-hall-after/u/original/2553926/neighborhoods1.jpg",
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      "name": "amado's",
      "address": "998 valencia st,san francisco, ca 94110",
      "website": "amadossf.com",
      "email": "amadossf@gmail.com",
      "phone_number": "",
      "capacity": 425,
      "average_ticket_price": 117,
      "venue_picture_url": "https://static1.squarespace.com/static/570c984fe321403a73e21190/570d340760b5e9c23c58188b/57ee83242e69cf6e04939284/1475248933873/07.jpg?format=500w",
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      "name": "bar fluxus",
      "address": "18 harlan pl,san francisco, ca 94108",
      "website": "barfluxus.com",
      "email": "ludo@barfluxus.com",
      "phone_number": "",
      "capacity": 176,
      "average_ticket_price": "N/A",
      "venue_picture_url": "https://cdn.funcheap.com/wp-content/uploads/2018/07/35486488_2067528890176448_5008394443703713792_o-563x375.jpg",
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      "name": "the milk bar",
      "address": "1840 haight st,san francisco, ca 94117",
      "website": "milksf.com",
      "email": "info@milksf.com",
      "phone_number": "",
      "capacity": 300,
      "average_ticket_price": 15,
      "venue_picture_url": "http://mycitysf.com/local/files/2012/01/milk-bay-sfinterdotcom.jpg",
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      "name": "the plough & stars",
      "address": "116 clement st,san francisco, ca 94118",
      "website": "http://www.theploughandstars.com/",
      "email": "sfplough@aol.com",
      "phone_number": "",
      "capacity": 50,
      "average_ticket_price": 20,
      "venue_picture_url": "https://www.crookandthebluff.com/assets/img/venues/ploughstars.jpeg",
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      "name": "neck of the woods",
      "address": "406 clement st,san francisco, ca 94118",
      "website": "neckofthewoodssf.com",
      "email": "booking@neckofthewoodssf.com",
      "phone_number": "",
      "capacity": 500,
      "average_ticket_price": 13,
      "venue_picture_url": "http://neckofthewoodssf.ticketfly.com/files/2014/08/IMG_2911-e1412026017702.jpg",
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      "name": "the royale",
      "address": "800 post st,san francisco, ca 94109",
      "website": "theroyalesf.com",
      "email": "will@theroyalesf.com",
      "phone_number": "",
      "capacity": 120,
      "average_ticket_price": 38,
      "venue_picture_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRdJpS7c0KEuGUoZIlJexMG5gfVUufjYmFmmzlkDl0RXg5rj29WQ",
      createdAt : new Date(),
      updatedAt : new Date(),
      readyToBook : true
    },
    {
      "name": "tupelo",
      "address": "1337 grant ave,san francisco, ca 94133",
      "website": "tupelosf.com",
      "email": "tupelosf@gmail.com",
      "phone_number": "",
      "capacity": 35,
      "average_ticket_price": 20,
      "venue_picture_url": "https://i.ytimg.com/vi/Tqdrx-z0Igo/hqdefault.jpg",
      createdAt : new Date(),
      updatedAt : new Date(),
      readyToBook : true
    },
    {
      "name": "doc's lab",
      "address": "124 columbus ave,san francisco, ca 94133",
      "website": "docslabsf.com",
      "email": "booking@docslabsf.com",
      "phone_number": "",
      "capacity": 65,
      "average_ticket_price": 25,
      "venue_picture_url": "https://i.gse.io/gse_media/118/5/1528737425-Venue-Davies-Symphony-Hall-tickets.jpg?c=1&h=322&p=1&q=30&w=564",
      createdAt : new Date(),
      updatedAt : new Date(),
      readyToBook : true
    },
    {
      "name": "the starry plough",
      "address": "3101 shattuck ave,berkeley, ca 94705",
      "website": "thestarryplough.com",
      "email": "starryploughbooking@yahoo.com",
      "phone_number": "",
      "capacity": 101,
      "average_ticket_price": "$11-30",
      "venue_picture_url": "https://s3-media3.fl.yelpcdn.com/bphoto/ByiG1X_W20fcRYKTpay4uQ/ls.jpg",
      createdAt : new Date(),
      updatedAt : new Date(),
      readyToBook : true
    },
    {
      "name": "frieght & salvage coffee house",
      "address": "2020 addison st,berkeley, ca 94704",
      "website": "thefreight.org",
      "email": "info@freightandsalvage.org",
      "phone_number": "",
      "capacity": 100,
      "average_ticket_price": 20,
      "venue_picture_url": "https://cdn.sfstation.com/wp-content/uploads/2018/09/freightsalvage.jpg",
      createdAt : new Date(),
      updatedAt : new Date(),
      readyToBook : true
    },
    {
      "name": "the back room",
      "address": "1984 bonita ave,berkeley, ca 94704",
      "website": "backroommusic.com",
      "email": "sam@backroommusic.com",
      "phone_number": "",
      "capacity": 87,
      "average_ticket_price": 38,
      "venue_picture_url": "https://i.pinimg.com/originals/4c/42/1f/4c421f915da8ebc8a3d26ecb000802cc.jpg",
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      "name": "sweet water music hall",
      "address": "19 corte madera ave,mill valley, ca 94941",
      "website": "sweetwatermusichall.com",
      "email": "booking@swmh.com/info@swmh.com",
      "phone_number": "",
      "capacity": 300,
      "average_ticket_price": 20,
      "venue_picture_url": "https://image-ticketfly.imgix.net/00/03/00/72/70-og.jpg?w=960&h=585",
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      "name": "the sound room",
      "address": "2147 broadway,oakland, ca 94612",
      "website": "soundroom.org",
      "email": "soundroomoakland@gmail.com",
      "phone_number": "",
      "capacity": 2300,
      "average_ticket_price": 8,
      "venue_picture_url": "https://s3-media2.fl.yelpcdn.com/bphoto/5VzQNIgrcArN6I__jqexhg/ls.jpg",
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      "name": "bill graham civic auditorium",
      "address": "99 grove st,san francisco, ca 94102",
      "website": "billgrahamcivicauditorium.com",
      "email": "info@billgrahamcivicauditorium.com",
      "phone_number": "",
      "capacity": 8500,
      "average_ticket_price": 50,
      "venue_picture_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfoyAbAXlXOmemWotzNSxnLg95GwiFWYUGHhTeUASAuXCI5tRL",
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      "name": "the regency ballroom",
      "address": "1300 van ness ave,san francisco, ca 94109",
      "website": "http://www.theregencyballroom.com",
      "email": "jparres@aegpresents.com",
      "phone_number": "",
      "capacity": 1400,
      "average_ticket_price": 26,
      "venue_picture_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm26uoHsrEOEglsYOi9y3TPsJfGRYYxPnvq8wE1cvLCXjPmYrx",
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      "name": "terra gallery & events",
      "address": "511 harrison st,san francisco, ca 94105",
      "website": "terrasf.com",
      "email": "info@terrasf.com",
      "phone_number": "",
      "capacity": 725,
      "average_ticket_price": 40,
      "venue_picture_url": "http://terrasf.com/img/events2016/Gallery-7.jpg",
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      "name": "treasure island music festival",
      "address": "treasure island,san francisco, ca 94103",
      "website": "https://www.treasureislandfestival.com/",
      "email": "ahoy@treasureislandfestival.com",
      "phone_number": "",
      "capacity": 300,
      "average_ticket_price": 100,
      "venue_picture_url": "https://cdn.funcheap.com/wp-content/uploads/2014/06/12080202_10153288260883031_1179198208054133463_o-550x280.jpg",
      createdAt : new Date(),
      updatedAt : new Date(),
      readyToBook : true
    },
    {
      "name": "davies symphony hall",
      "address": "201 van ness ave,san francisco, ca 94102",
      "website": "http://www.sfwmpac.org/davies-symphony-hall",
      "email": "rob.levin@sfgov.org",
      "phone_number": "",
      "capacity": 2743,
      "average_ticket_price": 184,
      "venue_picture_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Daviessymphonyhall.jpg/1200px-Daviessymphonyhall.jpg",
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      "name": "club fugazi",
      "address": "678 green st,san francisco, ca 94133",
      "website": "https://www.beachblanketbabylon.com",
      "email": "bbb@beachblanketbabylon.com",
      "phone_number": "",
      "capacity": 1200,
      "average_ticket_price": 30,
      "venue_picture_url": "https://s3-media2.fl.yelpcdn.com/bphoto/qxShrXknxRViFMbsUUiomg/ls.jpg",
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      "name": "feinstein’s at the nikko",
      "address": "222 mason st,san francisco, ca 94102",
      "website": "http://www.hotelnikkosf.com",
      "email": "info@hotelnikkosf.com",
      "phone_number": "",
      "capacity": 5000,
      "average_ticket_price": 30,
      "venue_picture_url": "https://travel.usnews.com/dims4/USNEWS/ca4c94b/2147483647/resize/255x255%5E%3E/crop/255x255/quality/85/?url=/static-travel/images/hp/20/16081/Hotel_Nikko_San_Francisco_usn_1.jpg",
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      "name": "the new parish",
      "address": "1743 san pablo ave, oakland, ca 94612, usa",
      "website": "http://www.thenewparish.com/",
      "email": "info@thenewparish.com",
      "phone_number": "",
      "capacity": 300,
      "average_ticket_price": 50,
      "venue_picture_url": "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwi4-ZH02YjeAhUKT48KHeaRAKsQjRx6BAgBEAU&url=http%3A%2F%2Foaklandcentral.com%2Fthe-scoop%2Fnew-parish%2F&psig=AOvVaw1_DnjSGIxX1Vunjr6YDZoV&ust=1539701626112625",
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      "name": "sound box",
      "address": "300 franklin st,san francisco, ca 94102",
      "website": "http://sfsoundbox.com",
      "email": "info@sfsoundbox.com",
      "phone_number": "",
      "capacity": 450,
      "average_ticket_price": 20,
      "venue_picture_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEOOfaJlN62nmL-Ny6vINKszaPV1zbdoeTGggF_dMNIpr1TP09",
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      "name": "ivy room",
      "address": "860 san pablo ave,albany, ca 94706",
      "website": "ivyroom.com",
      "email": "info@ivyroom.com",
      "phone_number": "",
      "capacity": 200,
      "average_ticket_price": 22,
      "venue_picture_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOj9mFrPbB2886p9Ee5gYxnOMN6N8Br1tGqoHsSbOtz6B4Nxy14w",
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      "name": "wish",
      "address": "1539 folsom st,san francisco, ca 94103",
      "website": "wishsf.com",
      "email": "info@wishsf.com",
      "phone_number": "",
      "capacity": 642,
      "average_ticket_price": 39,
      "venue_picture_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4AunrAVq1TZbMgFl3rGlzkIppXjHBEqYAlqnpIjoFuXRigi9c",
      createdAt : new Date(),
      updatedAt : new Date()
    },
   {
      "name": "gilman",
      "address": "924 gilman st,berkeley, ca 94710",
      "website": "924gilman.org",
      "email": "community@924gilman.org/booking@924gilman.org",
      "phone_number": "",
      "capacity": 307,
      "average_ticket_price": 50,
      "venue_picture_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Gilmanoutside.jpg/1200px-Gilmanoutside.jpg",
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      "name": "social hall sf",
      "address": "1270 sutter st,san francisco, ca 94109",
      "website": "socialhallsf.com",
      "email": "bnakano@aeglive.com",
      "phone_number": "",
      "capacity": 600,
      "average_ticket_price": 30,
      "venue_picture_url": "https://ww2.kqed.org/wp-content/uploads/sites/2/2015/08/regency_background-e1439240729260.jpeg",
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      "name": "the triple crown",
      "address": "1760 market st,san francisco, ca 94102",
      "website": "https://www.reverbnation.com/venue/triplecrownlive",
      "email": "contact@triplecrownlive.com",
      "phone_number": "",
      "capacity": 600,
      "average_ticket_price": 240,
      "venue_picture_url": "http://a.espncdn.com/combiner/i?img=%2Fphoto%2F2018%2F0609%2Fr383274_1296x729_16%2D9.jpg",
      createdAt : new Date(),
      updatedAt : new Date()
    },
     {
      "name": "yoshi's",
      "address": "510 embarcadero w,oakland, ca 94607",
      "website": "yoshis.com",
      "email": "robert@yoshis.com&daniel.marin@yoshis.com",
      "phone_number": "",
      "capacity": 310,
      "average_ticket_price": 19,
      "venue_picture_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYKKsxe8Cx1-3Z_lt85P08nZlTf26Z3VcW0PjDx_s8kVt0IXtG",
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      "name": "ireland's 32",
      "address": "3920 geary blvd,san francisco, ca 94118",
      "website": "irelands32sf.com",
      "email": "info@irelands32sf.com",
      "phone_number": "",
      "capacity": 300,
      "average_ticket_price": 30,
      "venue_picture_url": "https://images.complex.com/complex/image/upload/c_limit,w_680/fl_lossy,pg_1,q_auto/kugibp57tk5b6rsohzpn.jpg",
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      "name": "san francisco symphony",
      "address": "201 van ness ave,san francisco, ca 94102",
      "website": "http://www.sfsymphony.org",
      "email": "patronservices@sfsymphony.org",
      "phone_number": "",
      "capacity": 2743,
      "average_ticket_price": 184,
      "venue_picture_url": "https://www.sfsymphony.org/SanFranciscoSymphony/media/Library/Content-Images/Page-Headers/aboutus_420x270.jpg",
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      "name": "outside lands festival",
      "address": "golden gate park,san francisco, ca 94102",
      "website": "https://www.sfoutsidelands.com",
      "email": "info@sfoutsidelands.com",
      "phone_number": "",
      "capacity": 200000,
      "average_ticket_price": 350,
      "venue_picture_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw7XC_cnznkSON8BVcn0AVRXfceRzuPM_CxMbtSPtArtEgGkzlWw",
      createdAt : new Date(),
      updatedAt : new Date()
    }
  ], {});

    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
