const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const { name } = require('ejs');
const path = require('path');

mongoose.connect("mongodb+srv://p0203k:WiseGirl12!@cluster0.qtuy3qt.mongodb.net/KiddoShield");

const app = express();


app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));
// app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname));
app.engine('ejs', require('ejs').renderFile);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,  'index.html'));
});
app.get('/login', function(req, res){
    res.render('login');
});

app.get('/signup', function(req, res){
    res.render('signup');
});

app.get('/hospital', function(req, res){
  res.render('hospLogin');
});
app.get('/searchHospital', function(req, res){
  res.render('searchHosp');
});
app.get('/bookSlot', function(req, res){
  res.render('bookSlot');
});
app.get('/vaccine', function(req, res){
  res.render('vaccineInfo');
});
// app.get('/view', async (req, res) => {
//   try {
//       const bookings = await Booking.find({});
//       res.json(bookings);
//   } catch (error) {
//       console.error('Error fetching booking data:', error);
//       res.status(500).json({ error: 'Internal server error' });
//   }
// });
app.get('/bookings',async(req,res)=>{
  res.render('viewHistory');
})



app.get('/vaccineInfo', function(req, res){
  res.render('vaccineInfo');
});
app.get('/welcome', (req, res) => {
  const name = req.session.check ? req.session.user.name : null;
  res.render('dashboard', { name });
});

app.post("/signup", async (req, res) => {
  // try {
    // const { username, password, parentName,contactNumber,email,address,childname,dob,birthcert,aadhar,medicalHistory } = req.body;
    //   const collection1 = new collection({ username, password, parentName,contactNumber,email,address,childname,dob,birthcert,aadhar,medicalHistory });
        const data={
          user: req.body.user,
          password: req.body.password,
          parentName: req.body.parentName,
          contactNumber: req.body.contactNumber,
          address: req.body.address,
          childname: req.body.childname,
          dob: req.body.dob,
          birthcert: req.body.birthcert,
          aadhar: req.body.aadhar,
          medicalHistory: req.body.medicalHistory,
          }
      
          await collection.insertMany([])
          res.render('')
      
});
//--------------------------------------------------
app.post("/", async (req, res) => {
  try {
      const check = await collection.findOne({  user: req.body.username,
        password: req.body.password,
        //parentName: req.body.parentName,
        // contactNumber: req.body.contactNumber,
        // email: req.body.email,
        // address: req.body.address,
        // childName: req.body.childName,
        // dob: req.body.dob,
        // birthcert: req.body.birthcert,
        // aadhar: req.body.aadhar,
        // medicalHistory: req.body.medicalHistory, 
      });
       
        if (check.password===req.body.password ){
          req.session.user=check;
          res.render('dashboard')
        }
        else{
          res.send('Wrong password')
        }
          }
         catch (error) {
          res.send('Wrong details');
        }
});
//--------------------------------------------------------------------------------

app.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/login'); 
});

app.listen(process.env.PORT||5000, process.env.IP||'0.0.0.0');