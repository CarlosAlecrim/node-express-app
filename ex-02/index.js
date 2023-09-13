const express = require('express');
const app = express();

const path = require('path');
const CatController  = require('./controller/cat_controller'); 

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));

app.use(express.static(path.join(__dirname,'public')));

catControllerInstance = new CatController();
app.get('/', catControllerInstance.index);
app.get('/cats',catControllerInstance.all)


const port = 3000;
app.listen(port, ()=>{
    console.log("server up")
});