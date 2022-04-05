const mongoose= require('mongoose');
const url= "mongodb+srv://prakash:4IzPLJLBYXKFx3bV@cluster0.fqbzx.mongodb.net/mernstack?retryWrites=true&w=majority";
mongoose.connect(url,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>console.log("connection start")).catch((error)=>console.log(error.message)); 