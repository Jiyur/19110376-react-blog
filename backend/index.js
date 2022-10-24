const express=require('express');
const exphbs=require('express-handlebars');
const { myblog } = require('./models/blogModel');
const app=express();
const PORT=5000

const bodyParser = require('body-parser')

const routers=require('./routers/routers');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.engine('hbs',exphbs.engine({
    defaultLayout: 'main',
    extname:'.hbs'
}));

app.set('view engine','hbs');



app.listen(PORT, () => {
    console.log('The web server has started on port: ' + PORT);
});

const cors=require("cors");
const corsOptions ={
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
 }
app.use(cors(corsOptions));

app.use('/',routers.router);
