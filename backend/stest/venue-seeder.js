'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    // Add altering commands here.
    // Return a promise to correctly handle asynchronicity.

    // Example:
    return queryInterface.bulkInsert('venues', [
        {
            "name": "rickshaw stop",
            "address": "155 fell st, san francisco, ca 94102",
            "website": "https://www.rickshawstop.com/",
            "email": "info@rickshawstop.com",
            "phone number": "",
            "capacity": 400,
            "website description": "",
            "average ticket price": 49,
            "venue picture url": "http://3.bp.blogspot.com/-zfNYPUZqDWk/VUal1gFWkQI/AAAAAAAAFAM/10UHsMC7sbw/s1600/Rickshaw%2BStop.JPG"
          },
          {
            "name": "slim's",
            "address": "333 11th st, san francisco, ca 94103",
            "website": "http://www.slimspresents.com/",
            "email": "jasons@goldenvoice.com",
            "phone number": "",
            "capacity": 500,
            "website description": "",
            "average ticket price": 62,
            "venue picture url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPUqjaWbzR027x5f_PdPKTFAqgHoxGpm--Zsi836JiFPU_Mrg4Cg"
          },
           {
            "name": "sfjazz center",
            "address": "201 franklin st, san francisco, ca 94102",
            "website": "https://www.sfjazz.org",
            "email": "info@sfjazz.org",
            "phone number": "",
            "capacity": 700,
            "website description": "",
            "average ticket price": 64,
            "venue picture url": "https://www.sftravel.com/sites/sftraveldev.prod.acquia-sites.com/files/styles/sft_550x300/public/parters/images/P0001446_1_20140711130243_14.JPG?itok=Hb-4g0ZJ&timestamp=1536807428"
          },
          {
            "name": "the fillmore",
            "address": "1805 geary blvd,san francisco, ca 94115",
            "website": "http://thefillmore.com",
            "email": "thefillmore@livenation.com",
            "phone number": "",
            "capacity": 1315,
            "website description": "",
            "average ticket price": 32,
            "venue picture url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQaRSDIMqcTRRMSbK_D3esl6yL55R6nLoORKdiohSTzThQK1XPeA"
          },
          {
            "name": "the chapel",
            "address": "777 valencia st, san francisco, ca 94110",
            "website": "https://www.thechapelsf.com/",
            "email": "info@thechapelsf.com",
            "phone number": "",
            "capacity": 200,
            "website description": "",
            "average ticket price": 22,
            "venue picture url": "https://picture.liquidspace.com/Index/6ff1a226-262c-4b1a-a6d0-937bf86fc28c?emptyImageUrl=https:%2F%2Fliquidspace.com%2FContent%2FImages%2Fliquid-holder.jpg&etag=+VkOdxpOF3+h9nOqOl3tBA==&maxWidth=1100&maxHeight=820"
          },
          {
            "name": "great american music hall",
            "address": "859 o'farrell st,san francisco, ca 94109",
            "website": "http://www.slimspresents.com/",
            "email": "info@gamh.com",
            "phone number": "",
            "capacity": 470,
            "website description": "",
            "average ticket price": 25,
            "venue picture url": "https://upload.wikimedia.org/wikipedia/commons/6/6a/Great_American_Music_Hall_%28April_1976%29.jpg"
          },
           {
            "name": "the laundry",
            "address": "3359 26th st,san francisco, ca 94110",
            "website": "http://thelaundrysf.com",
            "email": "info@thelaundrysf.com",
            "phone number": "",
            "capacity": 210,
            "website description": "",
            "average ticket price": 62,
            "venue picture url": "https://picture.liquidspace.com/Index/9304975a-8757-4c2a-accf-32a58100d251?emptyImageUrl=https:%2F%2Fcontent.liquidspace.com%2FImages%2Fliquid-holder.jpg%3Fv%3D-73115844&etag=ki0J8DxHxGZWM6UNOfl8Dw==&maxWidth=1100&maxHeight=820&crop=true"
          },
          {
            "name": "the warfield",
            "address": "982 market st,san francisco, ca 94102",
            "website": "http://www.thewarfieldtheatre.com",
            "email": "info@thewarfieldtheatre.com",
            "phone number": "415) 345-0900",
            "capacity": 2300,
            "website description": "",
            "average ticket price": 45,
            "venue picture url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScA2OT_DMWKyjQbeWwL6p3s2JmXERKRE5gsfxdLe0hZSJBmLY7xw"
          },
          {
            "name": "hemlock tavern",
            "address": "1131 polk st,san francisco, ca 94109",
            "website": "http://www.hemlocktavern.com",
            "email": "hemlocktavern@gmail.com",
            "phone number": "",
            "capacity": 37,
            "website description": "",
            "average ticket price": 15,
            "venue picture url": "https://images.complex.com/complex/image/upload/c_limit,w_680/fl_lossy,pg_1,q_auto/olmzo0tiz4fxnzikx6wa.jpg"
          },
          "the riptide": {
            "name": "the riptide",
            "address": "3639 taraval st,san francisco, ca 94116",
            "website": "http://www.riptidesf.com",
            "email": "riptidesf@gmail.com",
            "phone number": "",
            "capacity": 500,
            "website description": "",
            "average ticket price": "N/A",
            "venue picture url": "https://c1.staticflickr.com/7/6004/5886394540_971eca7219_b.jpg"
          },
          {
            "name": "brick & mortar music hall",
            "address": "1710 mission st,san francisco, ca 94103",
            "website": "https://brickandmortarmusic.com",
            "email": "info@pegcollective.org}",
            "phone number": "",
            "capacity": 250,
            "website description": "",
            "average ticket price": 21,
            "venue picture url": "https://media2.fdncms.com/sfexaminer/imager/the-city-is-rolling-back-restrictions-on-brick-and-mortar-music-hall-after/u/original/2553926/neighborhoods1.jpg"
          },
          {
            "name": "amado's",
            "address": "998 valencia st,san francisco, ca 94110",
            "website": "amadossf.com",
            "email": "amadossf@gmail.com",
            "phone number": "",
            "capacity": 425,
            "website description": "",
            "average ticket price": 117,
            "venue picture url": "https://static1.squarespace.com/static/570c984fe321403a73e21190/570d340760b5e9c23c58188b/57ee83242e69cf6e04939284/1475248933873/07.jpg?format=500w"
          },
          {
            "name": "bar fluxus",
            "address": "18 harlan pl,san francisco, ca 94108",
            "website": "barfluxus.com",
            "email": "ludo@barfluxus.com",
            "phone number": "",
            "capacity": 176,
            "website description": "",
            "average ticket price": "N/A",
            "venue picture url": "https://cdn.funcheap.com/wp-content/uploads/2018/07/35486488_2067528890176448_5008394443703713792_o-563x375.jpg"
          },
          {
            "name": "the milk bar",
            "address": "1840 haight st,san francisco, ca 94117",
            "website": "milksf.com",
            "email": "info@milksf.com",
            "phone number": "",
            "capacity": 300,
            "website description": "",
            "average ticket price": 15,
            "venue picture url": "http://mycitysf.com/local/files/2012/01/milk-bay-sfinterdotcom.jpg"
          },
          {
            "name": "the plough & stars",
            "address": "116 clement st,san francisco, ca 94118",
            "website": "http://www.theploughandstars.com/",
            "email": "sfplough@aol.com",
            "phone number": "",
            "capacity": 50,
            "website description": "",
            "average ticket price": 20,
            "venue picture url": "https://www.crookandthebluff.com/assets/img/venues/ploughstars.jpeg"
          },
          {
            "name": "neck of the woods",
            "address": "406 clement st,san francisco, ca 94118",
            "website": "neckofthewoodssf.com",
            "email": "booking@neckofthewoodssf.com",
            "phone number": "",
            "capacity": 500,
            "website description": "",
            "average ticket price": 13,
            "venue picture url": "http://neckofthewoodssf.ticketfly.com/files/2014/08/IMG_2911-e1412026017702.jpg"
          },
          {
            "name": "the royale",
            "address": "800 post st,san francisco, ca 94109",
            "website": "theroyalesf.com",
            "email": "will@theroyalesf.com",
            "phone number": "",
            "capacity": 120,
            "website description": "",
            "average ticket price": 38,
            "venue picture url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRdJpS7c0KEuGUoZIlJexMG5gfVUufjYmFmmzlkDl0RXg5rj29WQ"
          },
          {
            "name": "tupelo",
            "address": "1337 grant ave,san francisco, ca 94133",
            "website": "tupelosf.com",
            "email": "tupelosf@gmail.com",
            "phone number": "",
            "capacity": 35,
            "website description": "",
            "average ticket price": 20,
            "venue picture url": "https://i.ytimg.com/vi/Tqdrx-z0Igo/hqdefault.jpg"
          },
          {
            "name": "doc's lab",
            "address": "124 columbus ave,san francisco, ca 94133",
            "website": "docslabsf.com",
            "email": "booking@docslabsf.com",
            "phone number": "",
            "capacity": 65,
            "website description": "",
            "average ticket price": 25,
            "venue picture url": "https://i.gse.io/gse_media/118/5/1528737425-Venue-Davies-Symphony-Hall-tickets.jpg?c=1&h=322&p=1&q=30&w=564"
          },
          {
            "name": "the starry plough",
            "address": "3101 shattuck ave,berkeley, ca 94705",
            "website": "thestarryplough.com",
            "email": "starryploughbooking@yahoo.com",
            "phone number": "",
            "capacity": 101,
            "website description": "",
            "average ticket price": "$11-30",
            "venue picture url": "https://s3-media3.fl.yelpcdn.com/bphoto/ByiG1X_W20fcRYKTpay4uQ/ls.jpg"
          },
          {
            "name": "frieght & salvage coffee house",
            "address": "2020 addison st,berkeley, ca 94704",
            "website": "thefreight.org",
            "email": "info@freightandsalvage.org",
            "phone number": "",
            "capacity": 100,
            "website description": "",
            "average ticket price": 20,
            "venue picture url": "https://cdn.sfstation.com/wp-content/uploads/2018/09/freightsalvage.jpg"
          },
          {
            "name": "the back room",
            "address": "1984 bonita ave,berkeley, ca 94704",
            "website": "backroommusic.com",
            "email": "sam@backroommusic.com",
            "phone number": "",
            "capacity": 87,
            "website description": "",
            "average ticket price": 38,
            "venue picture url": "https://i.pinimg.com/originals/4c/42/1f/4c421f915da8ebc8a3d26ecb000802cc.jpg"
          },
         {
            "name": "sweet water music hall",
            "address": "19 corte madera ave,mill valley, ca 94941",
            "website": "sweetwatermusichall.com",
            "email": "booking@swmh.com/info@swmh.com",
            "phone number": "",
            "capacity": 300,
            "website description": "",
            "average ticket price": 20,
            "venue picture url": "https://image-ticketfly.imgix.net/00/03/00/72/70-og.jpg?w=960&h=585"
          },
          {
            "name": "the sound room",
            "address": "2147 broadway,oakland, ca 94612",
            "website": "soundroom.org",
            "email": "soundroomoakland@gmail.com",
            "phone number": "",
            "capacity": 2300,
            "website description": "",
            "average ticket price": 8,
            "venue picture url": "https://s3-media2.fl.yelpcdn.com/bphoto/5VzQNIgrcArN6I__jqexhg/ls.jpg"
          },
          {
            "name": "bill graham civic auditorium",
            "address": "99 grove st,san francisco, ca 94102",
            "website": "billgrahamcivicauditorium.com",
            "email": "info@billgrahamcivicauditorium.com",
            "phone number": "",
            "capacity": 8500,
            "website description": "",
            "average ticket price": 50,
            "venue picture url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfoyAbAXlXOmemWotzNSxnLg95GwiFWYUGHhTeUASAuXCI5tRL"
          },
           {
            "name": "the regency ballroom",
            "address": "1300 van ness ave,san francisco, ca 94109",
            "website": "http://www.theregencyballroom.com",
            "email": "jparres@aegpresents.com",
            "phone number": "",
            "capacity": 1400,
            "website description": "",
            "average ticket price": 26,
            "venue picture url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm26uoHsrEOEglsYOi9y3TPsJfGRYYxPnvq8wE1cvLCXjPmYrx"
          },
          {
            "name": "terra gallery & events",
            "address": "511 harrison st,san francisco, ca 94105",
            "website": "terrasf.com",
            "email": "info@terrasf.com",
            "phone number": "",
            "capacity": 725,
            "website description": "",
            "average ticket price": 40,
            "venue picture url": "http://terrasf.com/img/events2016/Gallery-7.jpg"
          },
          {
            "name": "treasure island music festival",
            "address": "treasure island,san francisco, ca 94103",
            "website": "https://www.treasureislandfestival.com/",
            "email": "ahoy@treasureislandfestival.com",
            "phone number": "",
            "capacity": "N/A",
            "website description": "",
            "average ticket price": 100,
            "venue picture url": "https://cdn.funcheap.com/wp-content/uploads/2014/06/12080202_10153288260883031_1179198208054133463_o-550x280.jpg"
          },
          {
            "name": "davies symphony hall",
            "address": "201 van ness ave,san francisco, ca 94102",
            "website": "http://www.sfwmpac.org/davies-symphony-hall",
            "email": "rob.levin@sfgov.org",
            "phone number": "",
            "capacity": 2743,
            "website description": "",
            "average ticket price": 184,
            "venue picture url": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Daviessymphonyhall.jpg/1200px-Daviessymphonyhall.jpg"
          },
          {
            "name": "club fugazi",
            "address": "678 green st,san francisco, ca 94133",
            "website": "https://www.beachblanketbabylon.com",
            "email": "bbb@beachblanketbabylon.com",
            "phone number": "",
            "capacity": 1200,
            "website description": "",
            "average ticket price": 30,
            "venue picture url": "https://s3-media2.fl.yelpcdn.com/bphoto/qxShrXknxRViFMbsUUiomg/ls.jpg"
          },
          {
            "name": "feinstein’s at the nikko",
            "address": "222 mason st,san francisco, ca 94102",
            "website": "http://www.hotelnikkosf.com",
            "email": "info@hotelnikkosf.com",
            "phone number": "",
            "capacity": 5000,
            "website description": "",
            "average ticket price": 30,
            "venue picture url": "https://travel.usnews.com/dims4/USNEWS/ca4c94b/2147483647/resize/255x255%5E%3E/crop/255x255/quality/85/?url=/static-travel/images/hp/20/16081/Hotel_Nikko_San_Francisco_usn_1.jpg"
          },
         {
            "name": "the new parish",
            "address": "1743 san pablo ave, oakland, ca 94612, usa",
            "website": "http://www.thenewparish.com/",
            "email": "info@thenewparish.com",
            "phone number": "",
            "capacity": 300,
            "website description": "",
            "average ticket price": 50,
            "venue picture url": "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwi4-ZH02YjeAhUKT48KHeaRAKsQjRx6BAgBEAU&url=http%3A%2F%2Foaklandcentral.com%2Fthe-scoop%2Fnew-parish%2F&psig=AOvVaw1_DnjSGIxX1Vunjr6YDZoV&ust=1539701626112625"
          },
          {
            "name": "sound box",
            "address": "300 franklin st,san francisco, ca 94102",
            "website": "http://sfsoundbox.com",
            "email": "info@sfsoundbox.com",
            "phone number": "",
            "capacity": 450,
            "website description": "",
            "average ticket price": 20,
            "venue picture url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEOOfaJlN62nmL-Ny6vINKszaPV1zbdoeTGggF_dMNIpr1TP09"
          },
          {
            "name": "ivy room",
            "address": "860 san pablo ave,albany, ca 94706",
            "website": "ivyroom.com",
            "email": "info@ivyroom.com",
            "phone number": "",
            "capacity": 200,
            "website description": "",
            "average ticket price": 22,
            "venue picture url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOj9mFrPbB2886p9Ee5gYxnOMN6N8Br1tGqoHsSbOtz6B4Nxy14w"
          },
          {
            "name": "wish",
            "address": "1539 folsom st,san francisco, ca 94103",
            "website": "wishsf.com",
            "email": "info@wishsf.com",
            "phone number": "",
            "capacity": 642,
            "website description": "",
            "average ticket price": 39,
            "venue picture url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4AunrAVq1TZbMgFl3rGlzkIppXjHBEqYAlqnpIjoFuXRigi9c"
          },
          {
            "name": "gilman",
            "address": "924 gilman st,berkeley, ca 94710",
            "website": "924gilman.org",
            "email": "community@924gilman.org/booking@924gilman.org",
            "phone number": "",
            "capacity": 307,
            "website description": "",
            "average ticket price": 50,
            "venue picture url": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Gilmanoutside.jpg/1200px-Gilmanoutside.jpg"
          },
          {
            "name": "social hall sf",
            "address": "1270 sutter st,san francisco, ca 94109",
            "website": "socialhallsf.com",
            "email": "bnakano@aeglive.com",
            "phone number": "",
            "capacity": 600,
            "website description": "",
            "average ticket price": 30,
            "venue picture url": "https://ww2.kqed.org/wp-content/uploads/sites/2/2015/08/regency_background-e1439240729260.jpeg"
          },
          {
            "name": "the triple crown",
            "address": "1760 market st,san francisco, ca 94102",
            "website": "https://www.reverbnation.com/venue/triplecrownlive",
            "email": "contact@triplecrownlive.com",
            "phone number": "",
            "capacity": 600,
            "website description": "",
            "average ticket price": 240,
            "venue picture url": "http://a.espncdn.com/combiner/i?img=%2Fphoto%2F2018%2F0609%2Fr383274_1296x729_16%2D9.jpg"
          },
          {
            "name": "yoshi's",
            "address": "510 embarcadero w,oakland, ca 94607",
            "website": "yoshis.com",
            "email": "robert@yoshis.com&daniel.marin@yoshis.com",
            "phone number": "",
            "capacity": 310,
            "website description": "",
            "average ticket price": 19,
            "venue picture url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYKKsxe8Cx1-3Z_lt85P08nZlTf26Z3VcW0PjDx_s8kVt0IXtG"
          },
           {
            "name": "ireland's 32",
            "address": "3920 geary blvd,san francisco, ca 94118",
            "website": "irelands32sf.com",
            "email": "info@irelands32sf.com",
            "phone number": "",
            "capacity": "N/A",
            "website description": "",
            "average ticket price": 30,
            "venue picture url": "https://images.complex.com/complex/image/upload/c_limit,w_680/fl_lossy,pg_1,q_auto/kugibp57tk5b6rsohzpn.jpg"
          },
           {
            "name": "san francisco symphony",
            "address": "201 van ness ave,san francisco, ca 94102",
            "website": "http://www.sfsymphony.org",
            "email": "patronservices@sfsymphony.org",
            "phone number": "",
            "capacity": 2743,
            "website description": "",
            "average ticket price": 184,
            "venue picture url": "https://www.sfsymphony.org/SanFranciscoSymphony/media/Library/Content-Images/Page-Headers/aboutus_420x270.jpg"
          },
           {
            "name": "outside lands festival",
            "address": "golden gate park,san francisco, ca 94102",
            "website": "https://www.sfoutsidelands.com",
            "email": "info@sfoutsidelands.com",
            "phone number": "",
            "capacity": 200000,
            "website description": "",
            "average ticket price": 350,
            "venue picture url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw7XC_cnznkSON8BVcn0AVRXfceRzuPM_CxMbtSPtArtEgGkzlWw"
          },
          {
            "name": "greek theatre-uc berkeley",
            "address": "2001 gayley rd,berkeley, ca 94720",
            "website": "http://www.thegreektheatreberkeley.com/",
            "email": "",
            "phone number": "1 510-642-9988",
            "capacity": 8500,
            "website description": "",
            "average ticket price": 80,
            "venue picture url": "https://www.stageandcinema.com/wp-content/uploads/2013/09/The-Greek-Theatre-at-UC-Berkeley-setting-for-PL%C3%81CIDO-DOMINGO-IN-CONCERT-photo-by-Marc-Fong..jpg"
          },
          {
            "name": "telegraph room",
            "address": "1807 telegraph ave,oakland, ca 94612",
            "website": "http://thefoxoakland.com",
            "email": " contact@anotherplanetent.com",
            "phone number": "",
            "capacity": "N/A",
            "website description": "",
            "average ticket price": 30,
            "venue picture url": "https://s3st2.openlistings.com/images/properties/v2/592c4b6aeed9285dab71ea60/640/397/592c4b6db6f9f0278b1cb1d2.jpg"
          },
          {
            "name": "throckmorton theatre",
            "address": "142 throckmorton ave,mill valley, ca 94941",
            "website": "https://throckmortontheatre.org",
            "email": "info@142throckmortontheatre.org",
            "phone number": "",
            "capacity": 250,
            "website description": "",
            "average ticket price": 25,
            "venue picture url": "https://igx.4sqi.net/img/general/200x200/203132_ltVIEjqM1VqXwGzW-FNoWuluMh4xb4rgGxVmcPl_9ps.jpg"
          },
          {
            "name": "the chieftain irish pub & restaurant",
            "address": "198 5th st,san francisco, ca 94103",
            "website": "http://www.thechieftain.com",
            "email": "info@thechieftain.com",
            "phone number": "",
            "capacity": "N/A",
            "website description": "",
            "average ticket price": 25,
            "venue picture url": "https://irp-cdn.multiscreensite.com/957d4071/dms3rep/multi/desktop/462351_241370869302083_1789904735_o-2048x1214.jpg"
          },
          {
            "name": "shin dig",
            "address": "403 irving st,san francisco, ca 94122",
            "website": "https://shin-dig.net",
            "email": "meetup@shin-dig.net",
            "phone number": "",
            "capacity": 50,
            "website description": "",
            "average ticket price": 116,
            "venue picture url": "https://dun6irwnoloqf.cloudfront.net/images/venues/672/Shin-Dig-Wedding-San-Francisco-CA-13_main.1402545064.jpg"
          },
           {
            "name": "bimbo's 365 club",
            "address": "1025 columbus ave,san francisco, ca 94133",
            "website": "https://www.bimbos365club.com",
            "email": "info@bimbos365club.com",
            "phone number": "",
            "capacity": 1025,
            "website description": "",
            "average ticket price": 23000,
            "venue picture url": "https://www.first-hold.com/img/venue_photos/big/1453416957.jpg"
          },
          {
            "name": "bottom of the hill",
            "address": "1233 17th st, san francisco, ca 94107, usa",
            "website": "http://www.bottomofthehill.com",
            "email": "email@bottomofthehill.com",
            "phone number": "",
            "capacity": 350,
            "website description": "",
            "average ticket price": 20,
            "venue picture url": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Bottom_of_the_hill.jpg/220px-Bottom_of_the_hill.jpg"
          },
          {
            "name": "the independent",
            "address": "628 divisadero st, san francisco, ca 94117, usa",
            "website": "https://www.theindependentsf.com/",
            "email": "info@theindependentsf.com",
            "phone number": "",
            "capacity": 500,
            "website description": "",
            "average ticket price": 117,
            "venue picture url": "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiihIqD3IjeAhXMZSsKHb7KDsEQjRx6BAgBEAU&url=http%3A%2F%2Fwww.djoybeat.com%2Fvenues%2Fthe-independent-san-francisco%2F&psig=AOvVaw08zK9TMEncwu4Onld9S-ad&ust=1539702251955608"
          },
           {
            "name": "amnesia beer & music hall",
            "address": "853 valencia st, san francisco, ca 94110, usa",
            "website": "http://amnesiathebar.com/",
            "email": "music@amnesiathebar.com &\nevents@amnesiathebar.com",
            "phone number": "",
            "capacity": 1000,
            "website description": "",
            "average ticket price": 15,
            "venue picture url": "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjY8_7t24jeAhUVcCsKHb8PD-EQjRx6BAgBEAU&url=http%3A%2F%2Finstapint.com%2Famnesia%2F&psig=AOvVaw3ko6_NWd5D0XusjGJ0-hOj&ust=1539702208524208"
          },
         {
            "name": "cafe du nord",
            "address": "2174 market st, san francisco, ca 94114, usa",
            "website": "https://www.swedishamericanhall.com",
            "email": "swedish@noisepop.com",
            "phone number": "",
            "capacity": 400,
            "website description": "",
            "average ticket price": 15,
            "venue picture url": "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjQhsvj24jeAhVKXn0KHfHgCFYQjRx6BAgBEAU&url=https%3A%2F%2Fwww.tripadvisor.co.za%2FLocationPhotoDirectLink-g187147-d197646-i61989807-Ibis_Gare_du_Nord_TGV-Paris_Ile_de_France.html&psig=AOvVaw3EicOjqTwb0Q57i7nz9TC-&ust=1539702187379137"
          },
          {
            "name": "buscuit & blues",
            "address": "401 mason st, san francisco, ca 94102, usa",
            "website": "http://www.biscuitsandblues.com/",
            "email": "info@biscuitsandblues.com",
            "phone number": "",
            "capacity": 450,
            "website description": "",
            "average ticket price": 30,
            "venue picture url": "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjLkp_P24jeAhUBfX0KHf2gCjgQjRx6BAgBEAU&url=https%3A%2F%2Fwww.natcheztracetravel.com%2Fnatchez-trace-mississippi%2Florman-natchez-ms%2Fnatchez-mississippi%2F3001-biscuitsandblues.html&psig=AOvVaw2tIcDKCbSuf_ca0Kb7QEKB&ust=1539702141186114"
          },
           {
            "name": "concert meadow",
            "address": "wawona st, san francisco, ca 94132, usa",
            "website": "http://www.sterngrove.org",
            "email": "info@sterngrove.org",
            "phone number": "",
            "capacity": "N/A",
            "website description": "",
            "average ticket price": 275,
            "venue picture url": "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiTuPG-24jeAhVVAXIKHQvSDssQjRx6BAgBEAU&url=https%3A%2F%2Fstowevtproperties.com%2Fevent%2Fmusic-in-the-meadow%2F&psig=AOvVaw2srkYCaQrISPjfFtNLAO9c&ust=1539702090300211"
          },
          {
            "name": "jambase",
            "address": "576 sacramento st, san francisco, ca 94111, usa",
            "website": "https://www.jambase.com/",
            "email": "info@jambase.com",
            "phone number": "",
            "capacity": 2300,
            "website description": "",
            "average ticket price": 40,
            "venue picture url": "https://www.google.com/imgres?imgurl=https%3A%2F%2F2ab9pu2w8o9xpg6w26xnz04d-wpengine.netdna-ssl.com%2Fwp-content%2Fuploads%2F2017%2F08%2Favett-bros6515-1200x631.jpg&imgrefurl=https%3A%2F%2Fwww.jambase.com%2Farticle%2Favett-brothers-cancel-oregon-show-due-safety-concerns&docid=zKwYJrhj5TaI3M&tbnid=B0bMvVtiBhqXgM%3A&vet=10ahUKEwj-0LGT24jeAhWUbisKHcg4ClgQMwg-KAowCg..i&w=1200&h=631&bih=604&biw=1366&q=JamBase%20venue&ved=0ahUKEwj-0LGT24jeAhWUbisKHcg4ClgQMwg-KAowCg&iact=mrc&uact=8"
          },
          {
            "name": "mobile music express",
            "address": "mobile music, san francisco, ca 94112, united states",
            "website": "",
            "email": "",
            "phone number": "1 415-585-7585",
            "capacity": "N/A",
            "website description": "",
            "average ticket price": 50,
            "venue picture url": ""
          },
           {
            "name": "the masonic",
            "address": "1111 california st, san francisco, ca 94108, usa",
            "website": "http://sfmasonic.com/",
            "email": "info@sfmasonic.com",
            "phone number": "",
            "capacity": 3481,
            "website description": "",
            "average ticket price": 100,
            "venue picture url": "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwi2u8Xi2ojeAhXHv48KHenSCh0QjRx6BAgBEAU&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FSF_Masonic_Auditorium&psig=AOvVaw3501mObCIq9yV-aGT9pFeD&ust=1539701912996261"
          },
          {
            "name": "audium",
            "address": "1616 bush st, san francisco, ca 94109, usa",
            "website": "http://www.audium.org",
            "email": "audium@mindspring.org & david@audium.org. ",
            "phone number": "",
            "capacity": 49,
            "website description": "",
            "average ticket price": 35,
            "venue picture url": "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwi12On82ojeAhXPfn0KHeGIAYEQjRx6BAgBEAU&url=https%3A%2F%2Fwww.thedailybeast.com%2Fstep-inside-audium-san-franciscos-trippy-music-sculpture&psig=AOvVaw1PxqCy3QFf26un76ZNuVPi&ust=1539701962315675"
          },
           {
            "name": "elbo room",
            "address": "647 valencia st, san francisco, ca 94110, usa",
            "website": "https://www.elbo.com",
            "email": "info@elbo.com & matt@elbo.com(owner)",
            "phone number": "",
            "capacity": 600,
            "website description": "",
            "average ticket price": 10,
            "venue picture url": "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwixju_V2ojeAhWKp48KHe8wAhwQjRx6BAgBEAU&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FElbo_Room&psig=AOvVaw0xTccgwlZVXPPDIIhLu0yO&ust=1539701891345688"
          },
          {
            "name": "mr. tipple's recording studio",
            "address": "39 fell st, san francisco, ca 94102, usa",
            "website": "http://mrtipplessf.com/",
            "email": "jazz@mrtipplessf.com",
            "phone number": "",
            "capacity": 80,
            "website description": "",
            "average ticket price": 60,
            "venue picture url": "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.vox-cdn.com%2Fuploads%2Fchorus_asset%2Ffile%2F5231159%2FMrTipple_PChang-3071.0.jpg&imgrefurl=https%3A%2F%2Fsf.eater.com%2F2015%2F12%2F15%2F10236010%2Fmr-tipples-recording-studio-jazz-san-francisco&docid=ErzcaqgU6jiN-M&tbnid=_prQzAdaFVw9UM%3A&vet=10ahUKEwi429yU2ojeAhUkR48KHUfeAaUQMwguKAEwAQ..i&w=2000&h=1333&bih=604&biw=1366&q=Mr.%20Tipple%27s%20Recording%20Studio%20venue&ved=0ahUKEwi429yU2ojeAhUkR48KHUfeAaUQMwguKAEwAQ&iact=mrc&uact=8"
          },
          {
            "name": "bird & beckett books & records",
            "address": "653 chenery st, san francisco, ca 94131, usa",
            "website": "http://www.birdbeckett.com/",
            "email": "eric@birdbeckett.com(owner)",
            "phone number": "",
            "capacity": "N/A",
            "website description": "",
            "average ticket price": 20,
            "venue picture url": "https://www.google.com/imgres?imgurl=https%3A%2F%2Fres.cloudinary.com%2Fdostuff-media%2Fimage%2Fupload%2F%2Fc_fill%2Cg_faces%2Ch_630%2Cw_1200%2Fv1538794883%2Fevent-9973363.jpg&imgrefurl=https%3A%2F%2Fdothebay.com%2Fevents%2F2018%2F11%2F3%2Flisa-mezzacappa-six-cosmiccomics&docid=1M7B60HfxKmRUM&tbnid=3RI4RVb2dtDEcM%3A&vet=10ahUKEwjfsNj02IjeAhWCqI8KHUYwA1wQMwg7KAgwCA..i&w=1200&h=630&bih=604&biw=1366&q=Bird%20%26%20Beckett%20Books%20%26%20Records&ved=0ahUKEwjfsNj02IjeAhWCqI8KHUYwA1wQMwg7KAgwCA&iact=mrc&uact=8"
          },
          {
            "name": "rasselas jazz club & restaurant",
            "address": "1534 fillmore st, san francisco, ca 94115, usa",
            "website": "",
            "email": "",
            "phone number": "1 415-346-8696",
            "capacity": 80,
            "website description": "",
            "average ticket price": 25,
            "venue picture url": "https://www.google.com/imgres?imgurl=http%3A%2F%2Fuplup.com%2Fmusic_spot%2Frasselas-jazz-club-san-francisco%2Fmain_image%2FRasselas%2520Jazz%2520Club.jpg&imgrefurl=http%3A%2F%2Fuplup.com%2Fmusic%2Frasselas-jazz-club-san-francisco&docid=ROuOmSEe7t0EsM&tbnid=0lDMY5iIWRTerM%3A&vet=10ahUKEwjK0bLi2IjeAhUIQo8KHdMPBl8QMwg1KAEwAQ..i&w=332&h=234&bih=604&biw=1366&q=Rasselas%20Jazz%20Club%20%26%20Restaurant%20pic&ved=0ahUKEwjK0bLi2IjeAhUIQo8KHdMPBl8QMwg1KAEwAQ&iact=mrc&uact=8"
          },
          {
            "name": "zingari",
            "address": "501 post st, san francisco, ca 94102, usa",
            "website": "http://www.zingari.com/",
            "email": "events@zingari.com",
            "phone number": "",
            "capacity": 100,
            "website description": "",
            "average ticket price": 45,
            "venue picture url": "http://urbandiningguide.com/wp-content/uploads/2014/06/zingarisf.jpg"
          },
          {
            "name": "noe valley chamber music",
            "address": "1021 sanchez st, san francisco, ca 94114, usa",
            "website": "http://nvcm.org/",
            "email": "info@nvcm.org",
            "phone number": "",
            "capacity": "",
            "website description": "",
            "average ticket price": "",
            "venue picture url": ""
          },
          {
            "name": "club deluxe",
            "address": "1511 haight st,san francisco, ca 94117",
            "website": "clubdeluxe.co",
            "email": "",
            "phone number": "(415) 552-1555",
            "capacity": 49,
            "website description": "",
            "average ticket price": 30,
            "venue picture url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt_AjtWt45ZsmfRShZSp63vdUKcXu5WgJkx64TujF4z6V5wGIk"
          },
          {
            "name": "the lost church",
            "address": "65 capp st,san francisco, ca 94103",
            "website": "thelostchurch.com",
            "email": "janitor@thelostchurch.org &booking@thelostchurch.org",
            "phone number": "",
            "capacity": 65,
            "website description": "",
            "average ticket price": 15,
            "venue picture url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR-43FLUt4jDTp4Uc3IDP6z2sDz4zd0GZkhoXdoRh8f9KMR7y1vg"
          },
           {
            "name": "the saloon",
            "address": "1232 grant ave,san francisco, ca 94133",
            "website": "",
            "email": "",
            "phone number": "415) 636-5204",
            "capacity": "N/A",
            "website description": "",
            "average ticket price": 25,
            "venue picture url": "http://www.sfblues.net/Saloon/Saloon.jpg"
          },
          {
            "name": "revolution cafe",
            "address": "3248 22nd st (at bartlett st), san francisco, ca",
            "website": "http://www.revolutioncafesf.com/",
            "email": "andre@alamosquareseafoodgrill.com (email david )",
            "phone number": "",
            "capacity": 30,
            "website description": "",
            "average ticket price": 8,
            "venue picture url": "https://www.hayesvalleyshop.com/images/stores/momitobys/momitobys-01.jpg"
          },
          {
            "name": "louise m. davies symphony hall",
            "address": "201 van ness ave (btwn grove & hayes st),san francisco, ca 94102",
            "website": "http://www.sfsymphony.org",
            "email": "theigl@sfsymphony.org& ",
            "phone number": "",
            "capacity": 2743,
            "website description": "",
            "average ticket price": 103,
            "venue picture url": "https://lh3.googleusercontent.com/proxy/kxX7M_T9FaSkIB8Ww4LBoOAB9WqZ3EFtGN3GbE_r6AOL_SFyjXBQMTIvKJELmqrxKTtuLaZ4o5pE1od3xGZKB6-iNdUjtU4g6wSr8NCpqBEXBExquzyOOkD_FEC6xTb2AdB9Ce-tJ3sYCSXqdRFfi-Wj1UCKAyE=w213-h160-k-no"
          },
          {
            "name": "local edition",
            "address": "691 market street san francisco",
            "website": "http://localeditionsf.com/",
            "email": "info@localeditionsf.com",
            "phone number": "",
            "capacity": 200,
            "website description": "",
            "average ticket price": 30,
            "venue picture url": "https://static.urbandaddy.com/uploads/assets/image/articles/standard/47a78b7f97119391669f6fbb268b46317352f69c.jpg"
          },
          {
            "name": "black cat",
            "address": "400 eddy st,san francisco, ca 94109",
            "website": "blackcatsf.com",
            "email": "info@blackcatsf.com",
            "phone number": "",
            "capacity": 110,
            "website description": "",
            "average ticket price": 20,
            "venue picture url": "http://insidescoopsf.sfgate.com/files/2016/07/Black-Cat-exterior.jpg"
          },
          {
            "name": "cafe claude",
            "address": "7 claude lane, san francisco, ca 94108",
            "website": "http://cafeclaude.com",
            "email": "info@cafeclaude.com & fcl@cafeclaude.com",
            "phone number": "",
            "capacity": 120,
            "website description": "",
            "average ticket price": 50,
            "venue picture url": "https://resizer.otstatic.com/v2/photos/large/23365933.jpg"
          },
          {
            "name": "comstock saloon",
            "address": "155 columbus ave, san francisco, ca 94133, usa",
            "website": "http://comstocksaloon.com/",
            "email": "info@comstocksaloon.com",
            "phone number": "",
            "capacity": 85,
            "website description": "",
            "average ticket price": 13,
            "venue picture url": "https://resizer.otstatic.com/v2/photos/large/23872031.jpg"
          },
          {
            "name": "el rio",
            "address": "3158 mission st,san francisco, ca 94110",
            "website": "http://www.elriosf.com",
            "email": "\nbands@elriosf.com & bands@elriosf.com ",
            "phone number": "",
            "capacity": 300,
            "website description": "",
            "average ticket price": 5,
            "venue picture url": "http://www.elriosf.com/wp-content/uploads/2014/03/backlr.jpg"
          },
          {
            "name": "thee parkside",
            "address": "1600 17th st,san francisco, ca 94107",
            "website": "http://www.theeparkside.com",
            "email": "dinoandluigi@gmail.com",
            "phone number": "",
            "capacity": 100,
            "website description": "",
            "average ticket price": 12,
            "venue picture url": "http://files.holdmyticket.com/image/upload/w_700,h_700,c_fit,c_limit,q_68,dn_72,f_auto/v6/uploads/flyers2/k3qphvnmh1wbz0lwriib.jpg"
          },
          {
            "name": "starline social club",
            "address": "2236 martin luther king,oakland, ca 94612",
            "website": "starlinesocialclub.com",
            "email": "info@starlinesocialclub.com/contact@starlinesocialclub.com",
            "phone number": "",
            "capacity": 400,
            "website description": "",
            "average ticket price": 20,
            "venue picture url": "http://www.starlinesocialclub.com/StarlineSite/wp-content/uploads/2017/03/eventsbutton.jpg"
          },
          {
            "name": "ignite the mic sf",
            "address": "548 fillmore st,san francisco, ca 94117",
            "website": "thecentersf.com",
            "email": "events@thecentersf.com",
            "phone number": "",
            "capacity": 100,
            "website description": "",
            "average ticket price": 15,
            "venue picture url": "https://static1.squarespace.com/static/560c702ae4b0fdd5d69e6f79/t/5771a032ebbd1aadec768f1f/1467064379689/?format=750w"
          },
          {
            "name": "the uc theatre",
            "address": "2036 university ave,berkeley, ca 94704",
            "website": "theuctheatre.org",
            "email": "information@theuctheatre.org",
            "phone number": "",
            "capacity": 1400,
            "website description": "",
            "average ticket price": 30,
            "venue picture url": "http://farm2.static.flickr.com/1923/43465250660_de00eede06_z.jpg"
          },
          {
            "name": "live at mission blue",
            "address": "475 mission blue dr,brisbane, ca 94005",
            "website": "liveatmissionblue.com",
            "email": "info@liveatmissionblue.com/fobl@liveatmissionblue.com",
            "phone number": "",
            "capacity": 230,
            "website description": "",
            "average ticket price": 20,
            "venue picture url": "http://static1.squarespace.com/static/51e7253fe4b0cfebaa131a5f/t/5bb7e90b4785d37b98de1f22/1539557799107/?format=750w"
          },
          {
            "name": "the florence gould",
            "address": "100 34th ave,california palace of the legion",
            "website": "legionofhonor.org",
            "email": "contact@famsf.org",
            "phone number": "",
            "capacity": 361,
            "website description": "",
            "average ticket price": 14,
            "venue picture url": "http://www.fiaf.org/rental/photos/fgh10.jpg?1539612804522"
          },
          {
            "name": "fireside lounge",
            "address": "1453 webster st,alameda, ca 94501",
            "website": "thefiresidelounge.com",
            "email": "info@thefiresidelounge.com",
            "phone number": "",
            "capacity": 125,
            "website description": "",
            "average ticket price": 12,
            "venue picture url": "http://www.thefiresidelounge.com/uploads/1/8/5/9/1859477/published/26171706-1656133717777505-2628056981534857950-o.jpg"
          },
          {
            "name": "brava theater center",
            "address": "2781 24th st,san francisco, ca 94110",
            "website": "brava.org",
            "email": "info@brava.org",
            "phone number": "",
            "capacity": 360,
            "website description": "",
            "average ticket price": 20,
            "venue picture url": "https://lh3.googleusercontent.com/proxy/1iaACKaWEMXO9S2tSfRHOtAJYb1xYCIXNzEHu6-akG0PIGYbv-Pnj_Oh1SsDj6P_NyauVNEJyTkId9mmDhV-ZPkVEtNlIuHw8vUMBhA2qlGQpD69EFcphCWn6liCW17Qi8xLWMVCf4aAzWrk0TxvxlzZ89tbOw=w227-h141-k-no"
          },
          {
            "name": "san francisco live arts",
            "address": "1021 sanchez st,san francisco, ca 94114",
            "website": "",
            "email": "",
            "phone number": "415) 454-5238",
            "capacity": "N/A",
            "website description": "",
            "average ticket price": 18,
            "venue picture url": "https://i0.wp.com/37.60.251.194/~redlegon/livearts.com/wp-content/uploads/2017/04/LiveArts-FB-LogoBANNERv5.jpg"
          },
          {
            "name": "august hall",
            "address": "1706, 420 mason st, san francisco, ca 94102",
            "website": "augusthallsf.com",
            "email": "https://www.augusthallsf.com/contact/",
            "phone number": "415-693-0777",
            "capacity": 1000,
            "website description": "",
            "average ticket price": 20,
            "venue picture url": "https://static1.squarespace.com/static/5a813647ace86485f9fb20eb/5b50d4862b6a284bf4a27ac3/5b50d486f950b7631b6c59d7/1532023978921/augu_0517183391.jpg"
          }
        ]
      , {});

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