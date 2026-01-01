const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);
const path = require( 'path' );
const nodemailer = require('nodemailer');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'rohitstories1@gmail.com', 
    pass: 'olih ylku eozt vpda' 
  }
});

app.post('/sendMail', (req, res) => {
  const { name, city, phone, email, requirements } = req.body;
console.log("node mailer is on");
  // Create the email message
  const mailOptions = {
    from: 'rohitstories1@gmail.com', 
    to: 'hello@spacemandesigns.com', 
    subject: 'New Registration',
    html: `<p>New registration at Spaceman Designs</p>
           <p>Name: ${name}</p>
           <p>City: ${city}</p>
           <p>Phone: ${phone}</p>
           <p>Email: ${email}</p>
           <p>Requirement: ${requirements}</p>
           <p>Spaceman design website</P>`
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.error(error);
    }
    console.log('Email sent:', info.response);
    // res.send('Email sent successfully!');
    res.render('home', { emailSent: true });
    // window.location.reload();
  });
});



app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use('/assets', express.static(path.join(__dirname, 'assets')));


const port = process.env.PORT || 3000;
server.listen (port ,()=>
{
  console.log(`running on locahost ${port}`);
});

app.get ('/', (req,res)=>
{
  res.render('cheater')
})

app.get ('/contact', (req, res)=>
{
  res.render('contactus')
})

app.get ('/solution', (req, res)=>
{
  res.render('oursolution')
})

app.get ('/gallery', (req, res)=>
{
  res.render('gallery')
})

app.get ('/about', (req, res)=>
{
  res.render('about')
})
