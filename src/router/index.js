const khachhang = require("./khachhangRoter"); // Import the routes related to "khachhang"
const datlich=require("./DatLichrouter");
const dichvu=require("./DichVuRouter");
const Admin=require("./AdminRounter");
const nhanvien=require("./NhanVienRoute");
// Define a function called route that takes an Express app instance as an argument
function route(app){
    // Mount the "khachhang" routes under the "/khachhang" path

    app.use("/khachhang", khachhang);
    app.use("/datlich",datlich);
    app.use("/dichvu",dichvu);
    app.use("/nhanvien",nhanvien);
    app.use("/admin",Admin);
}

// Export the route function
module.exports = route;
