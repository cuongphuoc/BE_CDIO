const DatLich = require('../models/DatLich');

class DatLichController {
    // Xem tất cả lịch đặt
    async getAllDatLich(req, res) {
        try {
            const datLich = await DatLich.find();
            res.json(datLich);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    // Xem một lịch đặt cụ thể
    async getDatLich(req, res) {
        const id = req.body.id;
        try {
            const datLich = await DatLich.findById(id);
            if (!datLich) {
                return res.status(404).json({ message: "Không tìm thấy lịch đặt" });
            }
            res.json(datLich);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    // Thêm lịch đặt mới
    async createDatLich(req, res) {
        console.log('Request body:', req.body); // Debug: In ra dữ liệu nhận được từ client
        const { soDienThoai, hoTen, ngayDatLich, loaiDichVu, message,email } = req.body;
    
        if (!soDienThoai || !hoTen || !ngayDatLich || !loaiDichVu || !message||!email) {
            return res.status(400).send({ message: 'All fields are required' }); // Kiểm tra tất cả các trường bắt buộc
        }
    
        const datLich = new DatLich({
            soDienThoai,
            hoTen,
            ngayDatLich,
            loaiDichVu,
            message,
            email
        });
    
        try {
            const savedDatLich = await datLich.save();
            res.status(200).send(savedDatLich);
        } catch (error) {
            console.error('Error saving datLich:', error); // Debug: In ra lỗi nếu có
            res.status(500).send(error);
        }
    }

    // Sửa thông tin lịch đặt
    async updateDatLich(req, res) {
        const id = req.body.id;
        try {
            await DatLich.findByIdAndUpdate(id, req.body);
            res.json({ message: 'Thông tin lịch đặt đã được cập nhật' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    // Xóa lịch đặt
    async deleteDatLich(req, res) {
        const id = req.body.id;
        try {
            await DatLich.findByIdAndDelete(id);
            res.json({ message: 'Lịch đặt đã được xóa thành công' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = new DatLichController();
