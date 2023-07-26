const express = require('express');
const path = require('path');
const hbs = require('hbs');
const app = express();


const static_path = path.join(__dirname, "../public")
const template_path = path.join(__dirname, "../templates/views")
const partials_path = path.join(__dirname, "../templates/partials")

//public static path
app.set('view engine', 'hbs');
app.set('views', template_path)
hbs.registerPartials(partials_path);


app.use(express.static(static_path))


//routing
app.get("/", (req, res) => {
    res.render('index');
});

app.get("/about", (req, res) => {
    res.render('about')
});

app.get("/weather", (req, res) => {
    res.render("weather")
});

app.get("*", (req, res) => {
    res.render("404error")
});

app.listen(5000, () => {
    console.log('Server is running!!!')
});