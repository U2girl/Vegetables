// require dotenv so that I can use the .env fil
require('dotenv').config();
const express = require('express');
// require mongoose so that I can connect to my db
const mongoose = require('mongoose');
const app = express();
// const fruits = require('./models/fruits.js');
// we want to import the fruit model
const bodyParser = require('body-parser');
const Fruit = require('./models/fruit');
const jsxViewEngine = require('jsx-view-engine');

// Global configuration
const mongoURI = process.env.MONGO_URI;
const db = mongoose.connection;

// Connect to Mongo
mongoose.connect(mongoURI);
mongoose.connection.once('open', () => {
    console.log('connected to mongo');
})
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'jsx');
app.set('views', './views');
app.engine('jsx', jsxViewEngine());



//const Fruit = require('./models/fruits.js');
const vegetablesdb = require('./models/vegetables.js');

// moving the fruits to models/fruits.js in order to have compartmentalized code
// we are using MVC - models-views-controllers - architecture
// https://developer.mozilla.org/en-US/docs/Glossary/MVC
// const fruits = [
//     {
//         name:'apple',
//         color: 'red',
//         readyToEat: true
//     },
//     {
//         name:'pear',
//         color: 'green',
//         readyToEat: false
//     },
//     {
//         name:'banana',
//         color: 'yellow',
//         readyToEat: true
//     }
// ];

// ================ Middleware ================
//
app.use((req, res, next) => {
    console.log('Middleware: I run for all routes');
    next();
})

//near the top, around other app.use() calls
// app.use(express.urlencoded({extended:false}));

// These are my routes
// We are going to create the 7 RESTful routes
// There is an order for them to listed in the code
// I - N - D - U - C - E - S
//  Action      HTTP Verb   CRUD 
// I - Index    GET         READ - display a list of elements
// N - New      GET         CREATE * - but this allows user input
// D - Delete   DELETE      DELETE
// U - Update   PUT         UPDATE * - this updates our database
// C - Create   POST        CREATE * - this adds to our database
// E - Edit     GET         UPDATE * - but this allows user input
// S - Show     GET         READ - display a specific element
const vegetables = [];

app.get('/', (req, res) => {
    res.send('this is my fruits root route');
});
app.post(
    '/vegetables',async (req, res) => {
        if (!req.body){
            res.send("you cannot send an empty message pleas fill up your form");
            return;
          }
          const { name, color, isReadyToEat } = req.body;
    const newVegetable = new vegetablesdb({
      name,
      color,
      isReadyToEat: isReadyToEat === 'on', // Assuming isReadyToEat is a boolean field
    });
    // vegetables.push(newVegetable);
    const val= await newVegetable.save();
            res.render('vegetables/Index');
});
app.get('/vegetable/new', (req, res) => {
    res.render('vegetables/New');
});

app.get('/vegetables', (req, res) => {
   
        vegetablesdb.find().then((data)=>{
res.render('vegetables/Index', { p:data });
        })
  //      vegetables.push(allvegetables);
   //     console.log('All Vegetables are in');
       .catch((err) => {
        console.error('Error retrieving vegetables:', err);
      })
  });
  app.get('/vegetables/:vegetable/:info', (req, res) => {
    const vegetable= req.params.vegetable;
    const info=req.params.info;
    (info===true)? res.send(`${vegetable} is ready to eat` ):res.send(`eating ${vegetable} is not ready to eat` );
    
 });

app.get('/fruits',(req, res) => {
    
    Fruit.find().then((data)=>{
      res.render('fruits/index', {  myFruits:data});
  }).catch ((err)=> {
    console.error('Error retrieving fruit:', err);
  })

  
});

// New route for Fruits
app.get('/fruits/new', (req, res) => {
    res.render('fruits/New');
  });

  app.post('/fruits', async (req, res) => {
    if (!req.body){
      res.send("you cannot send an empty message pleas fill up your form");
      return;
    }
    const { name, color, isReadyToEat } = req.body;
    const newFruit = new Fruit({
      name,
      color,
      isReadyToEat: isReadyToEat === 'on', // Assuming isReadyToEat is a boolean field
    });
   
    const val= await newFruit.save();
    res.redirect('/fruits/New');// navigate to fruits when done fom database saving
  })
  app.get('/fruits/:fruit/:info', (req, res) => {
    const fruit= req.params.fruit;
    const info=req.params.info;
    if (info===true) res.send(`${fruit} is ready to eat` )
    else res.send(`eating ${fruit} is not ready to eat` )
    
 });
// I - INDEX - dsiplays a list of all fruits
/*app.get('/fruits/', async (req, res) => {
    // res.send(fruits);
    try {
        const foundFruits = await Fruit.find({});
        res.status(200).render('Index', {fruits: foundFruits});
    } catch (err) {
        res.status(400).send(err);
    }
    
});


// N - NEW - allows a user to input a new fruit
app.get('/fruits/new', (req, res) => {
    res.render('New');
});


// C - CREATE - update our data store
app.post('/fruits', async (req, res) => {
    if(req.body.readyToEat === 'on') { //if checked, req.body.readyToEat is set to 'on'
        req.body.readyToEat = true;
    } else {  //if not checked, req.body.readyToEat is undefined
        req.body.readyToEat = false;
    }

    try {
        const createdFruit = await Fruit.create(req.body);
        res.status(200).redirect('/fruits');
    } catch (err) {
        res.status(400).send(err);
    }
    // fruits.push(req.body);
    // console.log(fruits);
    // console.log(req.body)
    // res.send('data received');
    //  *** We will add this back in later
    //  ***
    // res.redirect('/fruits'); // send user back to /fruits
})

// S - SHOW - show route displays details of an individual fruit
app.get('/fruits/:id', async (req, res) => {
    // res.send(fruits[req.params.indexOfFruitsArray]);
    try {
        const foundFruit = await Fruit.findById(req.params.id);
        res.render('Show', {fruit: foundFruit});
    } catch (err) {
        res.status(400).send(err);
    }

})*/

app.listen(4001, () => {
    console.log('listening');
});