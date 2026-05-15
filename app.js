const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);
const path = require( 'path' );
const nodemailer = require('nodemailer');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


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
  res.render('blank')
})