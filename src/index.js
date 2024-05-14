const express = require('express');
const app = express();
const port = 8080;
const path = require('path');
//morgan là một module node.js ghi lại các Request và Response HTTP ở nhiều định dạng khác nhau.
//để tracking xem là xử dụng đúng method với route đó chưa, hay HTTP status trực tiếp trong terminal của server
const morgan = require('morgan')
const handlebars = require('express-handlebars');

app.use(express.static(path.join(__dirname, 'public')));
console.log(path.join(__dirname, 'public'))//D:\FullStackJS\Nodejs\Nodejs - F8\src\public

//HTTP logger
app.use(morgan('combined'))

//Template engine
app.engine('hbs', handlebars.engine({
    extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'))
console.log(path.join(__dirname, 'resources', 'views'))
//dirname trả về đường dẫn tới thư mục chứa file hiện tại
//(hoặc hiểu đúng là file thực thi dòng lệnh này, trong trường hợp này là index.js đang cùng cấp với src)
//D:\FullStackJS\Nodejs\Nodejs - F8,
//nhma hiện tại ở trong src còn thêm thằng resource nữa nên phải /resource/views

app.get('/', (req, res) => {
    res.render('home');
})

app.get('/news', (req, res) => {
    res.render('news');
})

app.listen(port, () => console.log(`Example app listening at port http://localhost:${port}`))