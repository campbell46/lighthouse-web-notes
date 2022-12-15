const express = require('express');
const morgan = require('morgan'); // logging tool

const PORT = 8080;
const app = express();
app.set('view engine', 'ejs');

///////////////////////////////////////////////////////
// Middleware
///////////////////////////////////////////////////////

app.use(morgan('dev'));
app.use(express.urlencoded({extended: true}));

///////////////////////////////////////////////////////
// Database
///////////////////////////////////////////////////////

const database = {
    pet1: {name: 'Quorra',   age: 1, type: 'dog'},
    pet2: {name: 'Marie',    age: 3, type: 'cat'},
    pet3: {name: 'Stanley',  age: 4, type: 'cat'},
    pet4: {name: 'Milly',    age: 4, type: 'dog'},
    pet5: {name: 'Tobi',     age: 2, type: 'dog'}
};

///////////////////////////////////////////////////////
// Routes
///////////////////////////////////////////////////////

app.get('/', (req, res) => {
    res.end('hello!');
});

/**
 * CREATE
 */

// NEW PET FORM SHOW
app.get('/pets/new', (req, res) => {
    res.render('pets/new');
});

// NEW PET FORM SUBMISSION
app.post('/pets', (req, res) => {
    // console.log('req.body', req.body);

    // FORMAT: {name: 'Quorra',   age: 1, type: 'dog'}

    const newPet = {
        name: req.body.name,
        age: parseInt(req.body.age),
        type: req.body.type
    };

    const newPetID = `pet${Object.keys(database).length + 1}`;

    // Add new pet to DB with generated key.
    database[newPetID] = newPet;

    // Use the SHOW route to view the pet you made!
    res.redirect(`/pets/${newPetID}`);
});

/**
 * READ
 */

// INDEX (ALL PETS)
app.get('/pets', (req, res) => {
    const templateVars = {
        pi: 3.14,
        pets: database // our DB object
    };

    // 2 args: EJS PATH, Template Variables OBJ
    res.render('pets/index', templateVars);
});

// SHOW (INDIVDUAL PET)
app.get('/pets/:id', (req, res) => {
    // console.log('req.params:', req.params);
    const petID = req.params.id;

    const pet = database[petID];
    
    const templateVars = {
        pet: pet
    };

    res.render('pets/show', templateVars);
});

/**
 * UPDATE
 */

// EDIT PET FORM SHOW
app.get('/pets/:id/edit', (req, res) => {
    const petID = req.params.id;

    const pet = database[petID];

    const templateVars = {
        id: petID,
        pet: pet
    };

    res.render('pets/edit', templateVars);
});

// EDIT PET FORM SUBMISSION
app.post('/pets/:id', (req, res) => {
    const petID = req.params.id;

    const updatedPet = {
        name: req.body.name,
        age: parseInt(req.body.age),
        type: req.body.type
    };

    // Update pet in DB.
    database[petID] = updatedPet;

    // Use the SHOW route to view the pet you made!
    res.redirect(`/pets/${petID}`);
});

/**
 * DELETE
 */

app.post('/pets/:id/delete', (req, res) => {
    const petID = req.params.id;

    // Remove pet from database object
    delete database[petID];

    res.redirect('/pets');
});

///////////////////////////////////////////////////////
// Server Listening...
///////////////////////////////////////////////////////

app.listen(PORT, () => {
    console.log('🎉 Express Server is now running on port:', PORT);
});
