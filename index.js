const http = require('http');
const express = require('express');
const cors = require('cors');
const { connect } = require("./database");
const route = require("./src/router");
const bodyParser = require('body-parser');
const expressSession = require('express-session');
const { Server } = require('socket.io'); // Cập nhật import của Socket.IO

// Tạo một ứng dụng express
const app = express();

// Sử dụng middleware built-in của express để phân tích cú pháp JSON và dữ liệu URL-encoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Sử dụng express-session để quản lý phiên làm việc
app.use(expressSession({
    secret: "yadayada",
    resave: true,
    saveUninitialized: true
}));

// Kích hoạt CORS
app.use(cors());

// Kết nối tới cơ sở dữ liệu
connect();

// Thiết lập cổng
const port = 3000;
app.set('port', port);

// Định nghĩa một route đơn giản
app.get('/', (req, res) => {
    res.send('Chào mừng đến với máy chủ'); 
});

// Áp dụng các route của bạn
route(app);

// Tạo máy chủ
const server = http.createServer(app);

// Khởi tạo Socket.IO và gắn nó vào máy chủ HTTP với cấu hình CORS
const io = new Server(server, {
  cors: {
    origin: "*"
  }
});

// Lắng nghe các kết nối Socket.IO
io.on('connection', (socket) => {
    console.log('A user connected');

    // Xử lý một tin nhắn từ client
    socket.on('message', (msg) => {
        console.log('Message received:', msg);
        // Phát tin nhắn tới tất cả các client kết nối
        io.emit('message', msg);
    });

    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });
});

// Bắt đầu lắng nghe trên cổng đã chỉ định
server.listen(port, () => {
    console.log('Server is running on port ' + port);
});
