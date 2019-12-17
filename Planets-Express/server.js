console.log("server.js is running");

const express = require("express"),
         cors = require("cors"),
         port = 8000,
      DB_NAME = "planets",
          app = express();

app.use(express.static(__dirname + "/client/dist/client"));
app.use(express.json());
app.use(cors());

require("./server/utils/mongoose")(DB_NAME);
require("./server/utils/routes")(app);

app.all('*', (req, res, next) => {
    res.sendFile(__dirname + "/client/dist/client/index.html");
});

app.listen(port, function() {
    console.log(`Listening on port ${port}`);
});
