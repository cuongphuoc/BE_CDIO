const mongoose = require('mongoose');

const DatLichSchema = new mongoose.Schema({
    
   
    soDienThoai: {
        type: String,
        required: true,
    },
    hoTen: {
        type: String,
        required: true,
    },
    ngayDatLich: {
        type: String,
        required: true,
    },
    
    loaiDichVu: {
        type: String,
        required: true,
    },
    message:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    }
});

module.exports = mongoose.model("datlich", DatLichSchema);
