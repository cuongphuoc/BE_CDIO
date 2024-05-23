const Admin = require("../models/Admin");

class AdminAuthMiddleware {
    async handle(req, res, next) {
        try {
            // Kiểm tra xem session có chứa adminId không
            if (!req.session.adminId) {
                return res.status(401).json({ message: 'Unauthorized: Admin session not found' });
            }

            // Tìm kiếm admin bằng adminId từ session
            const admin = await Admin.findById(req.session.adminId);

            // Kiểm tra xem admin có tồn tại không
            if (!admin) {
                return res.status(401).json({ message: 'Unauthorized: Admin not found' });
            }

            // Gắn admin vào req để có thể truy cập từ các route khác
            req.admin = admin;

            // Cho phép tiếp tục xử lý tiếp theo
            next();
        } catch (error) {
            // Bắt lỗi và trả về lỗi nếu có vấn đề xảy ra
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = new AdminAuthMiddleware();
