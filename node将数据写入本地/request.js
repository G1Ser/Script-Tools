const express = require('express')
const cors = require('cors')
const fs = require('fs')
// 创建Express应用
const app = express();
// 使用CORS中间件
app.use(cors());
// 解析JSON请求体
app.use(express.json());
// 定义一个路由来处理POST请求
app.post('/saveData', (req, res) => {
    const data = req.body;
    const jsonData = JSON.stringify(data, null, 2);

    fs.writeFile('data.json', jsonData, (err) => {
        if (err) {
            console.error('Error writing to file', err);
            res.status(500).json({ message: 'Internal Server Error' });
        } else {
            res.status(200).json({ message: 'Data successfully written to file' });
        }
    });
});

// 启动服务器
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});