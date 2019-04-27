const express = require("express");
const app = express();

app.set('views engine','ejs');

const routes = require('./routes')

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/',(req,res)=>{
    res.render('index.ejs',{name: "cool"});
})
app.use('/',routes);




// app.get("/",(req, res)=>{
//     res.send("<a href='/about'>About</a>");
// })

// app.get("/about",(req, res)=> {
//     res.send("<a href='/'>Ryshu</a>")
// })
// //creating server

 app.listen(3000,()=>
 {console.log("server is created...")});



// //Task number 1
// //make your your own info


