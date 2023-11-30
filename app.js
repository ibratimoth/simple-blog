const express=require('express');
const path=require('path');
const blogRoutes=require('./routes/blog')
const db=require('./data/database')
const app=express();

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));

app.use('/',blogRoutes);

app.use(function(req,res){
    res.status(404).render('404');
});
app.use(function(error,req,res,next){
    console.log(error);
    res.status(500).render('500');
});
let port=3000;

db.connectToDatabase().then(function(){
    app.listen(port,function(){
        console.log('sever has started')
        console.log('connected succesfull');
    });
}).catch(function(error){
    console.log('Failed to connect to the database');
    console.log(error);
});
