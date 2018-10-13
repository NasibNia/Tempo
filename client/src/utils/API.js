import axios from "axios";

export default {
    //==================BANDS==================
    // Gets all bands 
    getBands: function () {
        return axios.get("/api/bands");
    },
    // Gets the band with the given id
    getBand: function (id) {
        return axios.get("/api/bands/" + id);
    },
    // Deletes the band with the given id
    deleteBand: function (id) {
        return axios.delete("/api/bands/" + id);
    },
    // Saves a band to the database
    saveBand: function (bandData) {
        return axios.post("/api/bands", bandData);
    },

    //==================VENUES==================
    // Gets all venues 
    getVenues: function () {
        return axios.get("/api/venues");
    },
    // Gets the venue with the given id
    getVenue: function (id) {
        return axios.get("/api/venues/" + id);
    },
    // Deletes the venue with the given id
    deleteVenue: function (id) {
        return axios.delete("/api/venues/" + id);
    },
    // Saves a venue to the database
    saveVenue: function (venueData) {
        return axios.post("/api/venues", venueData);
    },

    //==================SHOWS==================
    // Gets all shows 
    getShows: function () {
        return axios.get("/api/shows");
    },
    // Gets the show with the given id
    getShow: function (id) {
        return axios.get("/api/shows/" + id);
    },
    // Deletes the show with the given id
    deleteShow: function (id) {
        return axios.delete("/api/shows/" + id);
    },
    // Saves a show to the database
    saveShow: function (showData, userRoute) {
        let user = userRoute.replace(/[0-9]/g, '');
        let id = userRoute.match(/\d+/)[0];
        return axios.post(`/api/shows/${user}` + id, showData);
    },

    // Check if user is logged-in 
    getUser: () => {
        return axios.get("/api/user", function(data){
          console.log(data)
          // Make sure the data contains the username as expected before using it
          console.log('user: ' + data.data.user);

      });

    //   cb(
    },

    logout: () => {
        return axios.get("/logout", function(res){
        // return res;
    })
    }
};