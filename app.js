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
app.use(bodyParser.urlencoded({ extended: false }));
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

//kullanici ekle get
app.get('/kullanici-ekle', (req, res) => {
    res.render('kullanici-ekle', {

    });
});

//kullanici ekle post
app.post('/kullanici-ekle', (req, res) => {
    res.render('kullanici-ekle', {

    });
});

//kullanici listele
app.get('/kullanici-listele', (req, res) => {
    res.render('kullanici-listele', {

    });
});

//kullanici duzenle
app.get('/kullanici-duzenle', (req, res) => {
    res.render('kullanici-duzenle', {

    });
});

//tum envanterler
app.get('/tum-envanterler', (req, res) => {
    res.render('tum-envanterler', {

    });
});

//tum kullanıcılar
app.get('/tum-kullanicilar', (req, res) => {
    res.render('tum-kullanicilar', {

    });
});

//kullanimda-olan-envanterler
app.get('/kullanimda-olan-envanterler', (req, res) => {
    res.render('kullanimda-olan-envanterler', {

    });
});

//en-cok-istek-kapatan-teknisyenler
app.get('/en-cok-istek-kapatan-teknisyenler', (req, res) => {
    res.render('en-cok-istek-kapatan-teknisyenler', {

    });
});

//online olan kullanıcılar
app.get('/online-kullanicilar', (req, res) => {
    res.render('online-kullanicilar', {

    });
});

//stok envanterler
app.get('/stok-envanterler', (req, res) => {
    res.render('stok-envanterler', {

    });
});

//tum-teknisyenler
app.get('/tum-teknisyenler', (req, res) => {
    res.render('tum-teknisyenler', {

    });
});

//teknisyen-raporlari
app.get('/teknisyen-raporlari', (req, res) => {
    res.render('teknisyen-raporlari', {

    });
});

//envanter-raporlari
app.get('/envanter-raporlari', (req, res) => {
    res.render('envanter-raporlari', {

    });
});

//kullanici-raporlari
app.get('/kullanici-raporlari', (req, res) => {
    res.render('kullanici-raporlari', {

    });
});

//kategori-olustur
app.get('/kategori-olustur', (req, res) => {
    res.render('kategori-olustur', {

    });
});

//kategori-duzenle
app.get('/kategori-duzenle', (req, res) => {
    res.render('kategori-duzenle', {

    });
});

//sil
app.get('/sil', (req, res) => {
    res.render('sil', {

    });
});

//site-ayarlari
app.get('/site-ayarlari', (req, res) => {
    res.render('site-ayarlari', {

    });
});

//site-domain-ayarlari
app.get('/site-domain-ayarlari', (req, res) => {
    res.render('site-domain-ayarlari', {

    });
});

//site-mail-ayarlari
app.get('/site-mail-ayarlari', (req, res) => {
    res.render('site-mail-ayarlari', {

    });
});

//site-logo-ayarlari-get
app.get('/site-logo-ayarlari', (req, res) => {
    res.render('site-logo-ayarlari', {

    });
});

//site-logo-ayarlari-post
app.post('/site-logo-ayarlari', (req, res) => {
    res.render('site-logo-ayarlari', {

    });
});

//site-meta-ayarlari-get
app.get('/site-meta-ayarlari', (req, res) => {
    res.render('site-meta-ayarlari', {

    });
});

//site-meta-ayarlari-post
app.post('/site-meta-ayarlari', (req, res) => {
    res.render('site-meta-ayarlari', {

    });
});

//cikis
app.get('/cikis', (req, res) => {
    res.render('cikis', {

    });
});

//kullanıcı proili
app.get('/kullanici-profili', (req, res) => {
    res.render('kullanici-profili', {

    });
});

//404 sayfası
app.get('/404', (req, res) => {
    res.render('404', {

    });
});

//envanterler
app.get('/envanterler', (req, res) => {
    res.render('envanterler', {

    });
});

//envanter goruntule
app.get('/envanter-goruntule', (req, res) => {
    res.render('envanter-goruntule', {

    });
});

//envanter ekle
app.get('/envanter-ekle', (req, res) => {
    res.render('envanter-ekle', {

    });
});

//envanter duzenle
app.get('/envanter-duzenle', (req, res) => {
    res.render('envanter-duzenle', {

    });
});


app.post('/kategori-auth', (req, res) => {
    var kategoriAdi = req.body.kategoriAdi;
    var kategoriAciklamasi = req.body.kategoriAciklamasi;
    var kategoriBaglantisi = req.body.kategoriBaglantisi;
    var sql = "INSERT INTO kategori(kategoriAdi,kategoriAciklamasi,kategoriBaglantisi) VALUES ('" + kategoriAdi + "','" + kategoriAciklamasi + "','" + kategoriBaglantisi + "')";
    var query = conn.query(sql, function(err, result) {
        console.log("Kategori oluşturuldu");
        res.render('kategori-olustur', {});
    });
})

//kategori-duzenle
app.get('/kategori-listele', (req, res) => {
    res.render('kategori-listele', {

    });
});

app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/auth', function(req, res) {
    var username = req.body.username;
    var password = req.body.password;
    if (username && password) {
        let data = { username: req.body.username, password: req.body.password };
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

app.post('/register_auth', function(req, res) {
    var username = req.body.username;
    var password = req.body.password;
    var email = req.body.email;
    let kontrol = "select * from login where username = " + username + "";
    if (kontrol == 1) {
        res.send("böyle bir kullanıcı var");
    } else {
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