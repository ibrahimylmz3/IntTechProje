const path = require('path');
const express = require('express');
const session = require('express-session');
const hbs = require('hbs');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();
const port = process.env.PORT || 81;


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

//login
app.get('/register', (req, res) => {
    res.render('register', {
        
    });
});

//kullanıcı anasayfa
app.get('/user-home', (req, res) => {
    res.render('user-home', {
        
    });
});

//hizmet olustur 
app.get('/hizmet-olustur', (req, res) => {
    res.render('hizmet-olustur', {
        
    });
});

//sorun olustur
app.get('/sorun-olustur', (req, res) => {
    res.render('sorun-olustur', {
        
    });
});

//taleplerim
app.get('/taleplerim', (req, res) => {
    res.render('taleplerim', {
        
    });
});

//talebimi goruntule
app.get('/talebimi-goruntule', (req, res) => {
    res.render('talebimi-goruntule', {
        
    });
});

//istek ayrintisi
app.get('/istek-ayrintisi', (req, res) => {
    res.render('istek-ayrintisi', {
        
    });
});

//teknisyen home
app.get('/teknisyen-home', (req, res) => {
    res.render('teknisyen-home', {
        
    });
});

//beklemede olan talepler
app.get('/beklemede-olan-taleplerim', (req, res) => {
    res.render('beklemede-olan-taleplerim', {
        
    });
});

//gunluk yapilmasi gereken taleplerim
app.get('/gunluk-yapilmasi-gereken-taleplerim', (req, res) => {
    res.render('gunluk-yapilmasi-gereken-taleplerim', {
        
    });
});

//suresi dolan taleplerim
app.get('/suresi-dolan-taleplerim', (req, res) => {
    res.render('suresi-dolan-taleplerim', {
        
    });
});

//suresi dolan taleplerim
app.get('/hizmet-talepleri', (req, res) => {
    res.render('hizmet-talepleri', {
        
    });
});

//onay bekleyen talepler
app.get('/onay-bekleyen-talepler', (req, res) => {
    res.render('onay-bekleyen-talepler', {
        
    });
});

//arama sonuclari
app.get('/arama-sonuclari', (req, res) => {
    res.render('arama-sonuclari', {
        
    });
});

//admin home
app.get('/admin-home', (req, res) => {
    res.render('admin-home', {
        
    });
});

//kategori ayarlari
app.get('/kategori-ayarlari', (req, res) => {
    res.render('kategori-ayarlari', {
        
    });
});

//raporlar
app.get('/raporlar', (req, res) => {
    res.render('raporlar', {
        
    });
});


//katagori listele
app.get('/katagori-listele', (req, res) => {
    res.render('katagori-listele', {
        
    });
});

//kullanici ekle
app.get('/kullanici-ekle', (req, res) => {
    res.render('kullanici-ekle', {
        
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
				res.redirect('/user-home');
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

app.post('/register_auth', function(req, res){
	var username = req.body.username;
	var password = req.body.password;
	var email = req.body.email;
			let	kontrol = "select * from login where username = "+ username +"";
			if(kontrol == 1){
				res.send("böyle bir kullanıcı var");
				}
				else{
					var sql = "INSERT INTO login(username,password,email) VALUES ('" + username + "','" + password + "','" + email + "')";
					  var query = conn.query(sql, function(err, result) {
						 console.log("kullanıcı oluşturuldu");
						 res.render('register', {});
					  });
					}
			});



app.listen(process.env.PORT || port, () => {
    console.log('İstanbulu dinliyorum... ' + port);
});
