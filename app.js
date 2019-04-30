const path = require('path');
const express = require('express');
const session = require('express-session');
const hbs = require('hbs');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();
const port = 81;


//veritabanı bağlantısı
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'inttechproje'
});

//veritabanı bağlantısı kontrolü
conn.connect((err) => {
    if (err) throw err;
    console.log('Veritabanına bağlantı sağlandı...');
});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/assets', express.static(__dirname + '/public'));

app.get('/index', (req, res) => {
    res.render('index');
});

//login
app.get('/login', (req, res) => {
    res.render('login', {
        
    });
});

app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

app.post('/auth', function(req, res) {
	var username = req.body.username;
	var password = req.body.password;
	if (username && password) {
        let data = {username: req.body.username, password: req.body.password};
        let sql = "SELECT * FROM login WHERE username = '" + req.body.username + "' AND password = '" + req.body.password + "'";
        let query = conn.query(sql, data, (err, results) => {
            if (err) throw err;
			if (results.length > 0) {
				req.session.loggedin = true;
				req.session.username = username;
				res.redirect('/index');
			} else {
				res.send('Böyle bir kullanıcı adı yok gibi');
			}			
			res.end();
		});
	} else {
		res.send('kullanıcı adı ve şifre girin');
		res.end();
	}
});




app.listen(process.env.PORT || port, () => {
    console.log('İstanbulu dinliyorum... ' + port);
});
