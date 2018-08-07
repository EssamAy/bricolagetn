const express = require('express');
const app = express();

const userApi = require('./server/api/user-api');
const contractorApi = require('./server/api/contractor-api');


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

app.use('/contractorapi',contractorApi);


app.get('*',(req,res,next)=>{
  res.send('404 Not Found ');
})

app.listen(3000,(err)=> {
  console.log('listen on port 3000');
});
