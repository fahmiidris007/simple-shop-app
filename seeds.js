const mongoose = require('mongoose');

/* Models */
const Product = require('./models/product');

//connect to mongodb
mongoose
  .connect('mongodb://127.0.0.1/shop_db')
  .then((result) => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.log(err);
  });

const seedProducts = [
  {
    name: 'Celana Jeans',
    brand: 'Levis',
    price: 500000,
    color: 'Blue',
    category: 'Celana',
  },
  {
    name: 'Kaos Oblong',
    brand: 'Gucci',
    price: 1000000,
    color: 'Black',
    category: 'Baju',
  },
  {
    name: 'Topi Snapback',
    brand: 'New Era',
    price: 300000,
    color: 'Black',
    category: 'Topi',
  },
  {
    name: 'Sepatu Sneakers',
    brand: 'Nike',
    price: 2000000,
    color: 'White',
    category: 'Sepatu',
  },
  {
    name: 'Celana Chino',
    brand: 'Uniqlo',
    price: 400000,
    color: 'Grey',
    category: 'Celana',
  },
  {
    name: 'Kemeja Flanel',
    brand: 'Gucci',
    price: 1500000,
    color: 'Red',
    category: 'Baju',
  },
  {
    name: 'Topi Trucker',
    brand: 'New Era',
    price: 250000,
    color: 'Red',
    category: 'Topi',
  },
  {
    name: 'Sepatu Boots',
    brand: 'Adidas',
    price: 3000000,
    color: 'Brown',
    category: 'Sepatu',
  },
];

Product.insertMany(seedProducts)
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
