// Import the routes related to "khachhang"
const khachhang = require("./khachhangRoter"); 
const nhanvien = require("./NhanVienRoute"); 
const admin = require("./AdminRounter"); 
const dichvu = require("./DichVuRouter"); 
const datlich = require("./DatLichrouter"); 

// Define a function called route that takes an Express app instance as an argument
function route(app){
    app.use("/khachhangs", khachhang);
    app.use("/nhanviens", nhanvien);
    app.use("/admins", nhanvien);
    app.use("/dichvus", nhanvien);
    app.use("/datlichs", nhanvien);   
}

// Export the route function
module.exports = route;
