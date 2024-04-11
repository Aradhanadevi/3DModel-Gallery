const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override'); // Import method-override package
const Blend = require('./models/Blend');
const Admin = require('./models/Admin'); // Correct filename casing
const app = express();

app.get('/login', (req, res) => {
  res.render('login', { error: null }); // Pass null or empty string if no error initially
});

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true })); // Use body-parser middleware
app.use(methodOverride('_method'));

// Connect to MongoDB
mongoose.connect('mongodb+srv://abc:123@laptop.upvxifc.mongodb.net/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

app.post('/login', async (req, res) => {
  const { username, password } = req.body; // This line is causing the error
  try {
    const admin = await Admin.findOne({ username, password });
    if (admin) {
      res.redirect('/');
    } else {
      res.render('login', { error: 'Invalid username or password' });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send('Server Error');
  }
});

// Middleware
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method')); // Use method-override middleware here

// Connect to MongoDB
mongoose.connect('mongodb+srv://abc:123@laptop.upvxifc.mongodb.net/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Routes
// Home Page - Display all blends
app.get('/', async (req, res) => {
  try {
    const blends = await Blend.find();
    res.render('index', { blends });
  } catch (err) {
    console.log(err);
    res.status(500).send('Server Error');
  }
});

// Create Blend Form
app.get('/blends/new', (req, res) => {
  res.render('new');
});

// Create Blend
app.post('/blends', async (req, res) => {
  try {
    await Blend.create(req.body);
    res.redirect('/');
  } catch (err) {
    console.log(err);
    res.status(500).send('Server Error');
  }
});

// Update Blend Form
app.get('/blends/:id/edit', async (req, res) => {
  try {
    const blend = await Blend.findById(req.params.id);
    res.render('edit', { blend });
  } catch (err) {
    console.log(err);
    res.status(500).send('Server Error');
  }
});

// Update Blend
app.put('/blends/:id', async (req, res) => {
  try {
    await Blend.findByIdAndUpdate(req.params.id, req.body);
    res.redirect('/');
  } catch (err) {
    console.log(err);
    res.status(500).send('Server Error');
  }
});

// Delete Blend
app.delete('/blends/:id', async (req, res) => {
  try {
    await Blend.findByIdAndDelete(req.params.id);
    res.redirect('/');
  } catch (err) {
    console.log(err);
    res.status(500).send('Server Error');
  }
});


// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
