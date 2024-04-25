const khachhang = require("./khachhangRoter"); // Import the routes related to "khachhang"

// Define a function called route that takes an Express app instance as an argument
function route(app){
    // Mount the "khachhang" routes under the "/khachhang" path
    app.use("/khachhang", khachhang);
}

// Export the route function
module.exports = route;
