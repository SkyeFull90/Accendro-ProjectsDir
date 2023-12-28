const express = require('express');
const app = express();

app.use(express.static('dist'));

app.get('/api/users', (req, res) => {    
    res.send([{
        id: 1,
        name: 'John',
        age: 22
    },
    {
        id: 2,
        name: 'Jane',
        age: 23
    }
    ]);
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Listening on port http://localhost:${port}`);
});