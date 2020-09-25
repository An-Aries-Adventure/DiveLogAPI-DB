const connectDB = require('./startup/db');
const express = require('express');
const app = express();
const user = require('./routes/users')
const diveRecord = require('./routes/diveRecord');
const auth = require('./routes/auth');



var cors = require('cors');
app.use(cors());


connectDB();
app.use(express.json());
app.use("/api/users", user);
app.use("/api/auth", auth);
app.use('/api/diveRecord', diveRecord);
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
});
