export function getUsers(_req, res) {
    const users = [{
        id: 1,
        name: 'John',
        age: 22
    },
        {
            id: 2,
            name: 'Jane',
            age: 23
        }];
    res.send(users);
    return users;
}