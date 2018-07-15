const express = require('express');
const app = express();

const bodyparser = require('body-parser');
const cors = require('cors');


// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

 app.get('/connect',(req,res,next)=>{
   res.send('You are connected ! ');
})

var userController = require("./server/controllers/user-controller");



app.get('/connect/:id',(req,res,next)=>{


   res.send( userController(req.params.id));

});



app.get('*',(req,res,next)=>{
  res.send('What are you doing here  ');
})

app.listen(3000,(err)=> {
  console.log('listen on port 3000');
});
