const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

app.get('/api/customers', (req,res) => {
    res.send([
    {'id': 1,
      'name': 'mike'
    },
    {'id': 2,
    'name': 'hhhhhhhhhhhhhe'  
    }
    ]);
});

app.listen(port, () => console.log(`on port   ${port}`));