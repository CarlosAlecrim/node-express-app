var express = require('express');

var app = express();

app.get('/', function(res, res){
    res.send('Bonjour a tous!')

})

var server = app.listen(8081,function(){
    console.log('server up')
}
);