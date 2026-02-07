import express from 'express';
import axios from 'axios';

const app = express();
const port = 3000;
 

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
  try {
    const { data } = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php');
    const cocktail = data.drinks[0]; 
    res.render('index', { cocktail, error: null });
  } catch (error) {
    console.error('API Error:', error.message);
    res.render('index', { cocktail: null, error: 'Failed to fetch cocktail. Try again!' });
  }
});

app.post('/random', async (req, res) => {
  try {
    const { data } = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php');
    const cocktail = data.drinks[0];
    res.render('index', { cocktail, error: null });
  } catch (error) {
    console.error('API Error:', error.message);
    res.render('index', { cocktail: null, error: 'Failed to fetch cocktail. Try again!' });
  }
});

app.listen(port, () => {
  console.log(`Cocktail app listening at http://localhost:${port}`);
});
