let names = [];

exports.datashow = (req, res)=> {
    res.render("index.ejs",{name: "ryshu"});
}

exports.formshow = (req, res)=>{
 res.render("form.ejs");
}

exports.formSubmit= (req, res)=> {
    names.push(req.body.name)
    res.send("Name:"+ names);
}