const mongoose = require("mongoose");
const URL = "mongodb+srv://brayan:PxY1lZmkwieJVAuS@cluster0.btkp4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(db => console.log("Conectado con mongoDB"))
.catch(err=> console.log("Tienes un error:" + err));

module.exports = mongoose;