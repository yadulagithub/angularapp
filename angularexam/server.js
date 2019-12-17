console.log("server.js is running");

// const cors = require("cors"),
const express = require("express"),
         port = 8000,
      DB_NAME = "pets",
          app = express();

app.use(express.static(__dirname + "/client/dist/client"));
app.use(express.json());
//app.use(cors());

require("./server/utils/mongoose")(DB_NAME);
require("./server/utils/routes")(app);

app.all('*', (req, res, next) => {
    res.sendFile(__dirname + "/client/dist/client/index.html");
});

app.listen(port, function() {
    console.log(`Listening on port ${port}`);
});