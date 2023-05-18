// const express = require('express');
// const app = express();
// const cors = require('cors');
// const port = 5000;
// const multer = require('multer');
// const customers = require('./customers.json');


// const upload = multer({ dest: 'public/uploads/' });

// app.use(cors());
// app.get('/api/customers', (req, res) => {
//   const { page = 1, limit = 10, search = '' } = req.query;


//   const filteredCustomers = customers.filter(
//     customer =>
//       customer.first_name.toLowerCase().includes(search.toLowerCase()) ||
//       customer.last_name.toLowerCase().includes(search.toLowerCase()) ||
//       customer.city.toLowerCase().includes(search.toLowerCase())
//   );
 

//   const startIndex = (page - 1) * limit;
//   const endIndex = page * limit;
//   const paginatedCustomers = filteredCustomers.slice(startIndex, endIndex);


//   res.json({
//     total: filteredCustomers.length,
//     page,
//     limit,
//     data: paginatedCustomers
//   });
// });




// app.get('/api/customers/:id', (req, res) => {
//     const customerId = parseInt(req.params.id);
//     const customer = customers.find(cust => cust.id === customerId);
  
//     if (customer) {
//       res.json(customer);
//     } else {
//       res.status(404).json({ error: 'Customer not found' });
//     }
//   });
  
  
//   app.get('/api/cities', (req, res) => {
//     const citiesMap = new Map();
  
//     customers.forEach(customer => {
//       const city = customer.city;
//       if (citiesMap.has(city)) {
//         citiesMap.set(city, citiesMap.get(city) + 1);
//       } else {
//         citiesMap.set(city, 1);
//       }
//     });
  
//     const cities = [];
//     citiesMap.forEach((count, city) => {
//       cities.push({ city, count });
//     });
  
//     res.json(cities);
//   });
  


// app.post('/api/customers/edit', upload.single('file'), (req, res) => {
//     const customerId = parseInt(req.body.id);
//     const customerIndex = customers.findIndex(cust => cust.id === customerId);
  
//     if (customerIndex !== -1) {
//       const updatedCustomer = {
//         id: customerId,
//         first_name: req.body.firstName,
//         last_name: req.body.lastName,
//         city: req.body.city,
//         company: req.body.company,
//         ...customers[customerIndex]
//       };
  
//       customers[customerIndex] = updatedCustomer;
  
//       res.json({ message: 'Customer updated successfully' });
//     } else {
//       res.status(404).json({ error: 'Customer not found' });
//     }
//   });
  



// app.get('/api/cities', (req, res) => {
//     const citiesMap = {};
//     customers.forEach(customer => {
//       const city = customer.city;
//       if (city in citiesMap) {
//         citiesMap[city]++;
//       } else {
//         citiesMap[city] = 1;
//       }
//     });
  
//     const cities = Object.keys(citiesMap).map(city => ({
//       city,
//       count: citiesMap[city]
//     }));
  
//     res.json(cities);
//   });
  
  
//   app.listen(port, () => {
//     console.log(`Server listening on port ${port}`);
//   });
  





const express = require('express');
const app = express();
const cors = require('cors');
const port = 5000;
const multer = require('multer');
const customers = require('./customers.json');

const upload = multer({ dest: 'public/uploads/' });

app.use(cors());
app.use(express.json());

app.get('/api/customers', (req, res) => {
  const { page = 1, limit = 10, search = '' } = req.query;

  const filteredCustomers = customers.filter(
    customer =>
      customer.first_name.toLowerCase().includes(search.toLowerCase()) ||
      customer.last_name.toLowerCase().includes(search.toLowerCase()) ||
      customer.city.toLowerCase().includes(search.toLowerCase())
  );

  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const paginatedCustomers = filteredCustomers.slice(startIndex, endIndex);

  res.json({
    total: filteredCustomers.length,
    page: parseInt(page),
    limit: parseInt(limit),
    data: paginatedCustomers
  });
});

app.get('/api/customers/:id', (req, res) => {
  const customerId = parseInt(req.params.id);
  const customer = customers.find(cust => cust.id === customerId);

  if (customer) {
    res.json(customer);
  } else {
    res.status(404).json({ error: 'Customer not found' });
  }
});

app.get('/api/cities', (req, res) => {
  const citiesMap = new Map();

  customers.forEach(customer => {
    const city = customer.city;
    if (citiesMap.has(city)) {
      citiesMap.set(city, citiesMap.get(city) + 1);
    } else {
      citiesMap.set(city, 1);
    }
  });

  const cities = [];
  citiesMap.forEach((count, city) => {
    cities.push({ city, count });
  });

  res.json(cities);
});

app.post('/api/customers/edit', upload.single('file'), (req, res) => {
  const customerId = parseInt(req.body.id);
  const customerIndex = customers.findIndex(cust => cust.id === customerId);

  if (customerIndex !== -1) {
    const updatedCustomer = {
      id: customerId,
      first_name: req.body.firstName,
      last_name: req.body.lastName,
      city: req.body.city,
      company: req.body.company,
      ...customers[customerIndex]
    };

    customers[customerIndex] = updatedCustomer;

    res.json({ message: 'Customer updated successfully' });
  } else {
    res.status(404).json({ error: 'Customer not found' });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});


