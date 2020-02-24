const express = require('express')
const app = express()
const port = 3000

class MailingList {
    constructor(name, members) {
        this.name = name;
        this.members = members;
    }
}

class Controller {
    constructor() {
        this.lists = [
            // new MailingList("test", [])
        ];
    }
    deleteList(name) {
        const toRemove = this.lists.find(l => l.name === name);
        if (toRemove) {
            this.lists.filter(l => l.name !== name);
            return true;
        } else {
            return false;
        }
    }
    updateList(name) {
        console.log("NAME: ", name);
        this.lists.push(name);
        console.log("this.lists: ", this.lists);
        //push the same way we do for addEvents
        //const toUpdate = this.lists.find(l => l.name === name)

    }
}



controller = new Controller();

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/lists', (req, res) => res.send(controller.lists))
app.get('/lists/:name', (req, res) => {
    let thisName = req.params.name;

    const matchingList = controller.lists.find(elem => thisName === elem.name);
    if (!matchingList) {
        res.status(404).send('Not found');
    } else {
        res.send(matchingList);
    }
})
app.delete('/lists/:name', (req, res) => {
    let thisName = req.params.name;

    const success = controller.deleteList(thisName);
    if (!success) {
        res.status(404).send('Not found');
    } else {
        res.send('');
    }
})
app.put('/lists/:name', (req, res) => {
    let thisName = req.params.name;

    const success = controller.updateList(thisName);
    if (!success) {
        res.status(404).send('Not found');
    } else {
        res.send('');
    }
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))