const express = require('express'),
         port = 1337,
          app = express(),
           bp = require('body-parser'),
      DB_NAME = "cupcakes_are_cool";

app.use(bp.json({limit: '50mb', extended: true}));
// app.use(bp({limit: '5mb'}));
app.use(express.static(__dirname + "/client/dist/client"));

require('./server/utils/mongoose')(DB_NAME);
require('./server/utils/routes')(app);

app.listen(port, () => console.log(`running on port ${port}`));

