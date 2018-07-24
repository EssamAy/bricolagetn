const express = require('express');
const app = express();

const userApi = require('./server/api/user-api');


const bodyparser = require('body-parser');
const cors = require('cors');

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

app.use('/userapi',userApi);

app.get('/connect',(req,res,next)=>{
  res.send('You are connected ! ');
})

app.get('*',(req,res,next)=>{
  res.send('What are you doing here  ');
})

app.listen(3000,(err)=> {
  console.log('listen on port 3000');
});
