import mongoose from "mongoose";

mongoose.connect("mongodb+srv://optimen:optimen@cluster0.1jii1an.mongodb.net/test", {
    useNewUrlParser: true,
    useUniFiedTopology: true,
})
    .then(db => console.log('DB is connected'))
    .catch(error => console.log(error))