const express = require('express'),
         cors = require('cors'),
         port = 8000,
          app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname + "/jokesOnUs/dist/jokesOnUs"));

const jokes = [
    {
        setup: "What is a joke?", 
        punchline: "I don't know"
    },
    {
        setup: "How many lawyers does it take to change a lightbulb",
        punchline: "3, 1 to buy a ladder, 1 to fall off, 1 more to sue the ladder company"
    },
    {
        setup: "What did batman say when he walked into a bar?",
        punchline: "Ow"
    }
];

app.get("/jokes", (req, res) => {
    let jokeIndex = Math.floor(Math.random()*jokes.length);
    res.json(jokes[jokeIndex]);
});

app.post("/jokes", (req, res) => {
    console.log(req.body);
    res.json({reply: "that wasn't a joke"});
})

app.listen(port, () => console.log(`listening on port ${port}`));