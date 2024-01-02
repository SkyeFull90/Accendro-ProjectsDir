import express from 'express';
const app = express();

//app.use(express.static('dist'));

app.get('/', (_req, res) => {
    res.send('Hello from Express!');

});

app.get('/api/users', (_req, res) => {
    const customers = [
        {id: 1, firstName: 'John', lastName: 'Doe'},
        {id: 2, firstName: 'Brad', lastName: 'Traversy'},
        {id: 3, firstName: 'Mary', lastName: 'Swanson'},
    ];

    res.json(customers);
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port http://localhost:${port}`));