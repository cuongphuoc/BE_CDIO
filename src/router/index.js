const khachhang = require("./khachhangRoter"); // Import the routes related to "khachhang"
const datlich=require("./DatLichrouter");
// Define a function called route that takes an Express app instance as an argument
function route(app){
    // Mount the "khachhang" routes under the "/khachhang" path

    app.use("/khachhang", khachhang);
    app.use("/datlich",datlich);
}

// Export the route function
module.exports = route;
